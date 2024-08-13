import {iProcessor} from "./processor.js";


export class ConsoleProcessor extends iProcessor {
    constructor(config, ackCallback) {
        super(config);
        this.ackCallback = ackCallback;
    }

    async process(data, dataAckCallback) {
        console.log('Processing data in consoleProcessor:', JSON.stringify(data));
        if (dataAckCallback != undefined) {
            try {
                await dataAckCallback(null, {});
            } catch (err) {
                console.error('Failed to acknowledge data with dataAckCallback', err);
                throw err;
            }
        }
        if (this.ackCallback != undefined) {
            try {
                await this.ackCallback(data);
            } catch (err) {
                console.error('Failed to acknowledge data with this.ackCallback', err);
                throw err;
            }
        }
    }

    static createProcessor(config, ackCallback) {
        return new ConsoleProcessor(config, ackCallback);
    }
}
