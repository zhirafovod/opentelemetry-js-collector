/**
 * @fileoverview gRPC-Web generated client stub for opentelemetry.proto.collector.logs.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.0
// source: opentelemetry/proto/collector/logs/v1/logs_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var opentelemetry_proto_logs_v1_logs_pb = require('../../../../../opentelemetry/proto/logs/v1/logs_pb.js')
const proto = {};
proto.opentelemetry = {};
proto.opentelemetry.proto = {};
proto.opentelemetry.proto.collector = {};
proto.opentelemetry.proto.collector.logs = {};
proto.opentelemetry.proto.collector.logs.v1 = require('./logs_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.opentelemetry.proto.collector.logs.v1.LogsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.opentelemetry.proto.collector.logs.v1.LogsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest,
 *   !proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>}
 */
const methodDescriptor_LogsService_Export = new grpc.web.MethodDescriptor(
  '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
  grpc.web.MethodType.UNARY,
  proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest,
  proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
  /**
   * @param {!proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.deserializeBinary
);


/**
 * @param {!proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.opentelemetry.proto.collector.logs.v1.LogsServiceClient.prototype.export =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
      request,
      metadata || {},
      methodDescriptor_LogsService_Export,
      callback);
};


/**
 * @param {!proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>}
 *     Promise that resolves to the response
 */
proto.opentelemetry.proto.collector.logs.v1.LogsServicePromiseClient.prototype.export =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
      request,
      metadata || {},
      methodDescriptor_LogsService_Export);
};


module.exports = proto.opentelemetry.proto.collector.logs.v1;

