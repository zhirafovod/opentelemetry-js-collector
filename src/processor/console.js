import {iProcessor} from "./processor.js";


export class ConsoleProcessor extends iProcessor {
    constructor(config, ackCallback) {
        super(config);
        this.ackCallback = ackCallback;
    }

    async process(data, dataAckCallback) {
        console.log('Processing data in consoleProcessor:', JSON.stringify(data));
        if (dataAckCallback != undefined) {
            await dataAckCallback();
        }
        if (this.ackCallback != undefined) {
            await this.ackCallback(data);
        }
    }

    static createProcessor(config, ackCallback) {
        return new ConsoleProcessor(config, ackCallback);
    }
}
