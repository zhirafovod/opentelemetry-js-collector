/**
 * this class is an interface for a collector processor.
 *
 * A processor should be able to process the data batch and acknowledge each it using provided
 *
  */
export class iProcessor {

    /**
     * Per processor data acknowledgement callback. The callback should be called with the data batch to acknowledge
     * its processing.
     * @type (data):void
     */
    ackCallback = undefined;

    constructor(config, ackCallback) {
    }

    /**
     * Processes a data piece.
     * @param data - data batch
     * @param dataAckCallback - callback to acknowledge
     */
    async process(data, dataAckCallback) {
        throw new Error('not implemented');
    }

    static createProcessor(config, ackCallback) {
        return new iProcessor(config, ackCallback);
    }
}
