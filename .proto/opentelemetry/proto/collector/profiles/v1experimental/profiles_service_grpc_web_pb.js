/**
 * @fileoverview gRPC-Web generated client stub for opentelemetry.proto.collector.profiles.v1experimental
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.0
// source: opentelemetry/proto/collector/profiles/v1experimental/profiles_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var opentelemetry_proto_profiles_v1experimental_profiles_pb = require('../../../../../opentelemetry/proto/profiles/v1experimental/profiles_pb.js')
const proto = {};
proto.opentelemetry = {};
proto.opentelemetry.proto = {};
proto.opentelemetry.proto.collector = {};
proto.opentelemetry.proto.collector.profiles = {};
proto.opentelemetry.proto.collector.profiles.v1experimental = require('./profiles_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ProfilesServiceClient =
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ProfilesServicePromiseClient =
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
 *   !proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest,
 *   !proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse>}
 */
const methodDescriptor_ProfilesService_Export = new grpc.web.MethodDescriptor(
  '/opentelemetry.proto.collector.profiles.v1experimental.ProfilesService/Export',
  grpc.web.MethodType.UNARY,
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest,
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse,
  /**
   * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.deserializeBinary
);


/**
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ProfilesServiceClient.prototype.export =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/opentelemetry.proto.collector.profiles.v1experimental.ProfilesService/Export',
      request,
      metadata || {},
      methodDescriptor_ProfilesService_Export,
      callback);
};


/**
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse>}
 *     Promise that resolves to the response
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ProfilesServicePromiseClient.prototype.export =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/opentelemetry.proto.collector.profiles.v1experimental.ProfilesService/Export',
      request,
      metadata || {},
      methodDescriptor_ProfilesService_Export);
};


module.exports = proto.opentelemetry.proto.collector.profiles.v1experimental;

