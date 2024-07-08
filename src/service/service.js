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
    procoessors = [];

    constructor(config, onDataCallback) {
        this.config = config;
        if (onDataCallback === undefined) {
            throw new Error('onDataCallback is required');
        }
        this.onDataCallback = onDataCallback;
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
    addProcessor(processor) {
        throw new Error('not implemented');
    }

}
