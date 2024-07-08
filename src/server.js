import grpc from '@grpc/grpc-js';
import {TraceService} from './service/trace.js';

// Default configuration
const config = {
    receivers: ['trace'],
    processors: ['console'],
};

export class Collector {
    receivers = {};
    processors = {};
    server = {};
    config ;

    static PORT = '0.0.0.0:4317';

    /**
     * Constructor parses config and create instances of the receivers and processors
     *
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.server = new grpc.Server();
    }

    async init(){
        this.server.bindAsync(Collector.PORT, grpc.ServerCredentials.createInsecure(), () => {
            console.log(`gRPC server running at ${Collector.PORT}`);
            this.server.start();
        });
        if (this.config.receivers) {
            if (this.config.receivers.includes('trace')) {
                this.receivers.add('trace', new TraceService(config));
                this.receivers.trace.registerGrpcHandler(this.server);
                for (let processor in this.processors) {
                    this.receivers.trace.addProcessor(processor);
                }

            }
        }
    }

    async addProcessor(processor){
        if (!this.processors.contain(processor)) {
            for (let receiver in this.receivers) {
                receiver.addProcessor(processor);
            }
        }
    }
}


