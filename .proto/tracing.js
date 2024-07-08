import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

// Enable OpenTelemetry logs for debugging
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Set up the OTLP trace exporter to send spans to the gRPC server
const traceExporter = new OTLPTraceExporter({
    url: 'http://localhost:4317', // Update this URL if your server runs on a different port or address
});

// Set up the OpenTelemetry SDK with auto-instrumentations
const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
});

// Start the OpenTelemetry SDK
sdk.start();

// Ensure the process waits for all spans to be exported before exiting
process
    .on('uncaughtException', (err, origin) => {
        console.log(err);
    })
    .on('SIGTERM', () => {
        sdk.shutdown()
            .then(() => console.log('Tracing terminated'))
            .catch((error) => console.log('Error terminating tracing', error))
            .finally(() => process.exit(0));
    });
