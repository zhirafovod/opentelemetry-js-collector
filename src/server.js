import grpc from '@grpc/grpc-js';
import {TraceService} from './service/trace.js';
import {ConsoleProcessor} from "./processor/console.js";
import {MetricService} from "./service/metric.js";

// Default configuration
const defaultConfig = {
    receivers: ['trace','metric'],
    processors: [],
    // processors: ['console'],
};

export class Collector {
    receivers = {};
    processors = {};
    server;
    config = {};

    static PORT = '0.0.0.0:4317';

    /**
     * Constructor parses config and create instances of the receivers and processors
     *
     * @param config
     */
    constructor(config) {
        this.config = config || defaultConfig;
        this.server = new grpc.Server();
    }

    async init(){
        if (this.config.processors) {
            if (this.config.processors.includes('console')) {
                this.processors.console = new ConsoleProcessor(this.config);
            }
        }
        if (this.config.receivers) {
            if (this.config.receivers.includes('trace')) {
                this.receivers.trace = new TraceService(this.config);
                this.receivers.trace.registerGrpcHandler(this.server);
                Object.keys(this.processors).forEach(processorName => {
                    this.receivers.trace.addProcessor(processorName, this.processors[processorName]);
                });
            }
            if (this.config.receivers.includes('metric')) {
                this.receivers.metric = new MetricService(this.config);
                this.receivers.metric.registerGrpcHandler(this.server);
                Object.keys(this.processors).forEach(processorName => {
                    this.receivers.metric.addProcessor(processorName, this.processors[processorName]);
                });
            }
        }
    }

    async run(){
        this.server.bindAsync(Collector.PORT, grpc.ServerCredentials.createInsecure(), () => {
            console.log(`gRPC server running at ${Collector.PORT}`);
            this.server.start();
        });
    }

    async addProcessor(name, processor){
        if (processor != undefined && ! (name in this.processors)) {
            for (let receiverName in this.receivers) {
                await this.receivers[receiverName].addProcessor(name, processor);
            }
        }
    }
}


