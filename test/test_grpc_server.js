import path from 'path';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROTO_PATH = path.join(__dirname, '..','.proto', 'opentelemetry', 'trace_service.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.resolve(__dirname), '..', '.proto'],
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const traceService = protoDescriptor.opentelemetry.proto.collector.trace.v1.TraceService;

const collectStatistics = (request) => {
  console.log('Received request:', JSON.stringify(request));
  // TODO: add different receivers
};

const exportTraces = (call, callback) => {
  collectStatistics(call.request);
  callback(null, {});
};

const server = new grpc.Server();
server.addService(traceService.service, { Export: exportTraces });
const PORT = '0.0.0.0:4317';
server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`gRPC server running at ${PORT}`);
  server.start();
});
