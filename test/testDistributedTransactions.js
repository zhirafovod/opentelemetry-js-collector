import { Resource } from '@opentelemetry/resources';
import { BasicTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { PeriodicExportingMetricReader, MeterProvider } from '@opentelemetry/sdk-metrics';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-grpc';
import { trace, metrics, SpanStatusCode } from '@opentelemetry/api';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

// Configuration
const numHosts = 5;
const transactionInterval = 1000; // in milliseconds
const metricsInterval = 1000; // in milliseconds

// Resource attributes
const resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'example-openai-proxy'
});

// Set up the OTLP Exporters
const traceExporter = new OTLPTraceExporter({
    url: 'http://localhost:4317',
    credentials: null,
});
const metricExporter = new OTLPMetricExporter({
    url: 'http://localhost:4317',
    credentials: null,
});

// Set up the Tracer Provider and add the OTLP exporter
const tracerProvider = new BasicTracerProvider({ resource });
tracerProvider.addSpanProcessor(new BatchSpanProcessor(traceExporter));
tracerProvider.register();

// Set up the Meter Provider and add the OTLP exporter
const reader = new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: metricsInterval
});
const meterProvider = new MeterProvider({
    resource: resource,
    metricReaders: [reader]
});
metrics.setGlobalMeterProvider(meterProvider);

// Create a tracer and meter
const tracer = trace.getTracer('example-openai-proxy', '0.1.0');
const meter = metrics.getMeter('example-openai-proxy', '0.1.0');

// Create a counter instrument
const transactionCounter = meter.createCounter('transaction_counter', {
    description: 'Counts the number of transactions',
    unit: '1',
});

// Function to simulate transactions
function simulateHostTransactions(hostId) {
    setInterval(() => {
        const span = tracer.startSpan(`transaction-${hostId}`);
        try {
            const success = Math.random() > 0.5;
            if (success) {
                span.setAttribute('transaction.status', 'success');
            } else {
                throw new Error('Transaction failed');
            }
            transactionCounter.add(1, {
                'host.id': hostId,
                'transaction.status': success ? 'success' : 'failure'
            });
            console.log(`Host ${hostId} emitted a ${success ? 'successful' : 'failed'} transaction`);
        } catch (error) {
            span.setAttribute('transaction.status', 'failure');
            span.recordException(error);
            span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
            transactionCounter.add(1, {
                'host.id': hostId,
                'transaction.status': 'failure'
            });
            console.log(`Host ${hostId} encountered an error: ${error.message}`);
        } finally {
            span.end();
        }
    }, transactionInterval);
}

// Start intervals for each host
for (let i = 0; i < numHosts; i++) {
    simulateHostTransactions(i);
}
