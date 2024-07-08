/**
 * @fileoverview gRPC-Web generated client stub for opentelemetry.proto.collector.metrics.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.0
// service: opentelemetry/proto/collector/metrics/v1/metrics_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var opentelemetry_proto_metrics_v1_metrics_pb = require('../../../../../opentelemetry/proto/metrics/v1/metrics_pb.js')
const proto = {};
proto.opentelemetry = {};
proto.opentelemetry.proto = {};
proto.opentelemetry.proto.collector = {};
proto.opentelemetry.proto.collector.metrics = {};
proto.opentelemetry.proto.collector.metrics.v1 = require('./metrics_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.opentelemetry.proto.collector.metrics.v1.MetricsServiceClient =
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
proto.opentelemetry.proto.collector.metrics.v1.MetricsServicePromiseClient =
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
 *   !proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest,
 *   !proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse>}
 */
const methodDescriptor_MetricsService_Export = new grpc.web.MethodDescriptor(
  '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
  grpc.web.MethodType.UNARY,
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest,
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
  /**
   * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.deserializeBinary
);


/**
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.opentelemetry.proto.collector.metrics.v1.MetricsServiceClient.prototype.export =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
      request,
      metadata || {},
      methodDescriptor_MetricsService_Export,
      callback);
};


/**
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse>}
 *     Promise that resolves to the response
 */
proto.opentelemetry.proto.collector.metrics.v1.MetricsServicePromiseClient.prototype.export =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
      request,
      metadata || {},
      methodDescriptor_MetricsService_Export);
};


module.exports = proto.opentelemetry.proto.collector.metrics.v1;

