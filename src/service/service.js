import {queue} from "async";

import path, {dirname} from 'path';
import grpc from '@grpc/grpc-js';
import { loadProto } from '../util/protoLoader.js'; // Assume this is a helper function to load proto files
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/**
 * @class iService
 * @description Interface for a collector receiver service (i.e. trace, metric, log).
 *
 * @param {Object} config - Configuration object
 * @param {Function} onDataCallback - Callback
 */


export class iService {
    config;
    onDataCallback;
    processingQueue;
    processors = {};
    ExportMetricsServiceResponse;

    constructor(config, onDataCallback) {
        this.config = config;
        this.onDataCallback = onDataCallback;
        this.processingQueue = queue(this._processTask.bind(this), config.concurrency || 10);

        const PROTO_PATH = path.join(__dirname, '..', '..', '.proto', 'metrics_service.proto');
        const packageDefinition = loadProto(PROTO_PATH, [path.resolve(__dirname, '..', '..', '.proto')]);
        const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        this.ExportMetricsServiceResponse = protoDescriptor.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;

    }

    /**
     * @method registerHandler - Register the receiver handler to the provided grpc server. The method should be called
     * by the collector server during initialization. It should call the server.addService method to add the appropriate
     * handler to be called for a specific grpc service.
     * @param server
     */
    registerGrpcHandler(server) {
        throw new Error('not implemented');
    }

    /**
     * @method registerHttpHandler - Register the receiver handler to the provided express app. The method should be called
     * by the collector server during initialization. It should call the app.post method to add the appropriate handler
     * to be called for a specific http endpoint.
     * @param app
     */
    registerHttpHandler(app) {
        throw new Error('not implemented');
    }

    /**
     * @method handler - default implementation of the receiver handler
     * @param data
     * @param ackCallback
     * @returns {Promise<void>}
     */
    async handler(data, ackCallback) {
        for (let processor of this.processors) {
            processor.process(data, ackCallback);
        }
        this.onDataCallback(data, ackCallback);
    }

    /**
     * @method addProcessor - Add a processor to the receiver service. The processor should be called for each data
     * piece received by the receiver service.
     *
     * @param processor
     */
    addProcessor(name, processor) {
        throw new Error('not implemented');
    }


    async _handleGrpcRequest(call, callback) {
        try {
            await this.processingQueue.push({ data: call.request, ackCallback: callback });
            if (callback instanceof Function) {
                console.log('acknowledging gRPC request');
                // callback({"partialSuccess": {}});
                callback();
            }
        } catch (err) {
            console.error('Failed to handle gRPC request', err);
            if (callback instanceof Function) {
                callback(err);
            } else {
                console.error('Callback is not a function');
            }
        }
    }

    async _processTask(task, done) {
        const { data, ackCallback } = task;
        try {
            await this.process(data, ackCallback);
            if (done instanceof Function) {
                done();
            }
        } catch (err) {
            console.error('Failed to process task', err);
            if (done instanceof Function) {
                done(err);
            }
            // else {
            //     console.error('Done is not a function');
            // }
        }
    }

    /**
     * This method should invoke every registered processor with the data and create a new ack callback for every
     * processor. When each processor callback is completed, the method should invoke the ackCallback and onDataCallback.
     * @param data
     * @param ackCallback
     */
    async process(data, ackCallback=undefined) {
        const promises = Object.values(this.processors).map(processor => {
            return new Promise((resolve) => {
                processor.process(data, resolve);
            });
        });

        // Wait for all processors to complete
        await Promise.all(promises);

        // Call the original ackCallback
        if (ackCallback) {
            try {
                // const r = await ackCallback({"partial_success": 1});
                // const r = await ackCallback(0, {});

                // const response = proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                const r = await ackCallback(this.ExportMetricsServiceResponse);
                console.log('ackCallback returned:', r);
            } catch (err) {
                console.error('Failed to acknowledge data with ackCallback', err);
                throw err;
            }
        }

        // Call the onDataCallback
        if (this.onDataCallback instanceof Function) {
            try {
                const r = this.onDataCallback(data);
                console.log('ackCallback returned:', r);
            } catch (err) {
                console.error('Failed to call onDataCallback', err);
                throw err;
            }
        }
    }

}
