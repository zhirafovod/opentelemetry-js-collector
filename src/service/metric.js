import { iService } from "./service.js";
import path, {dirname} from 'path';
import grpc from '@grpc/grpc-js';
import { loadProto } from '../util/protoLoader.js'; // Assume this is a helper function to load proto files
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export class MetricService extends iService {

    server;
    processors = {};

    constructor(config, onDataCallback) {
        super(config, onDataCallback);
    }

    async registerGrpcHandler(server) {
        const PROTO_PATH = path.join(__dirname, '..', '..', '.proto', 'metrics_service.proto');
        const packageDefinition = loadProto(PROTO_PATH, [path.resolve(__dirname, '..', '..', '.proto')]);
        const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const metricService = protoDescriptor.opentelemetry.proto.collector.metrics.v1.MetricsService;

        server.addService(metricService.service, {
            Export: this._handleGrpcRequest.bind(this)
        });
        if (this.server == undefined) {
            this.server = server;
        }
    }

    addProcessor(name, processor) {
        this.processors[name] = processor;
    }

}
