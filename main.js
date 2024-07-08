import {Collector} from "./src/server.js";

const collector = new Collector();
await collector.init();
await collector.run();
