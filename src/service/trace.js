import { iService } from "./service.js";
import path from 'path';
import grpc from '@grpc/grpc-js';
import { loadProto } from '../util/protoLoader.js'; // Assume this is a helper function to load proto files
import {queue} from 'async';

export class TraceService extends iService {
    constructor(config, onDataCallback) {
        super(config, onDataCallback);
        this.processingQueue = queue(this._processTask.bind(this), config.concurrency || 10);
    }

    async registerGrpcHandler(server) {
        const PROTO_PATH = path.join(__dirname, '..', '.proto', 'opentelemetry', 'trace_service.proto');
        const packageDefinition = loadProto(PROTO_PATH, [path.resolve(__dirname, '..', '.proto')]);
        const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const traceService = protoDescriptor.opentelemetry.proto.collector.trace.v1.TraceService;

        server.addService(traceService.service, {
            Export: this._handleGrpcRequest.bind(this)
        });
    }

    addProcessor(processor) {
        this.processors.push(processor);
    }

    async _handleGrpcRequest(call, callback) {
        try {
            await this.processingQueue.push({ data: call.request, ackCallback: callback });
        } catch (err) {
            console.error('Failed to handle gRPC request', err);
            callback(err);
        }
    }

    async _processTask(task, done) {
        const { data, ackCallback } = task;
        try {
            await this.process(data, ackCallback);
            done();
        } catch (err) {
            console.error('Failed to process task', err);
            done(err);
        }
    }

    /**
     * This method should invoke every registered processor with the data and create a new ack callback for every
     * processor. When each processor callback is completed, the method should invoke the ackCallback and onDataCallback.
     * @param data
     * @param ackCallback
     */
    async process(data, ackCallback=undefined) {
        const promises = this.processors.map(processor => {
            return new Promise((resolve) => {
                processor.process(data, resolve);
            });
        });

        // Wait for all processors to complete
        await Promise.all(promises);

        // Call the original ackCallback
        if (ackCallback) ackCallback();

        // Call the onDataCallback
        this.onDataCallback(data);
    }
}
