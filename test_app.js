import opentelemetry from '@opentelemetry/api';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector-grpc';
import grpc from '@grpc/grpc-js';

// This script generates 10 spans and sends them to the collector server
const collectorOptions = {
    url: 'https://localhost:4317',
    credentials: grpc.credentials.createInsecure(),
};

const provider = new NodeTracerProvider();
const exporter = new CollectorTraceExporter(collectorOptions);
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();

const tracer = opentelemetry.trace.getTracer('example-openai-proxy');

let count = 0;
const targetSpanCount = 100;


// TODO: increment counter
function generateTestSpans() {
    const span = tracer.startSpan('test-span');
    span.setAttribute('custom-attribute', 'example-value');
    span.addEvent('test-event');
    span.end();
    console.log("generated a test span");
    count++;
    if (count >= targetSpanCount) {
        clearInterval(interval);
        console.log(`Generated ${targetSpanCount} spans, stopping interval.`);
    }
}

const interval = setInterval(generateTestSpans, 1000);
