// service: opentelemetry/proto/collector/metrics/v1/metrics_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var opentelemetry_proto_metrics_v1_metrics_pb = require('../../../../../opentelemetry/proto/metrics/v1/metrics_pb.js');
goog.object.extend(proto, opentelemetry_proto_metrics_v1_metrics_pb);
goog.exportSymbol('proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess', null, global);
goog.exportSymbol('proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest', null, global);
goog.exportSymbol('proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.repeatedFields_, null);
};
goog.inherits(proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.displayName = 'proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.displayName = 'proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.displayName = 'proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceMetricsList: jspb.Message.toObjectList(msg.getResourceMetricsList(),
    opentelemetry_proto_metrics_v1_metrics_pb.ResourceMetrics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new opentelemetry_proto_metrics_v1_metrics_pb.ResourceMetrics;
      reader.readMessage(value,opentelemetry_proto_metrics_v1_metrics_pb.ResourceMetrics.deserializeBinaryFromReader);
      msg.addResourceMetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      opentelemetry_proto_metrics_v1_metrics_pb.ResourceMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated opentelemetry.proto.metrics.v1.ResourceMetrics resource_metrics = 1;
 * @return {!Array<!proto.opentelemetry.proto.metrics.v1.ResourceMetrics>}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.getResourceMetricsList = function() {
  return /** @type{!Array<!proto.opentelemetry.proto.metrics.v1.ResourceMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, opentelemetry_proto_metrics_v1_metrics_pb.ResourceMetrics, 1));
};


/**
 * @param {!Array<!proto.opentelemetry.proto.metrics.v1.ResourceMetrics>} value
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} returns this
*/
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.setResourceMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opentelemetry.proto.metrics.v1.ResourceMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opentelemetry.proto.metrics.v1.ResourceMetrics}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.addResourceMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opentelemetry.proto.metrics.v1.ResourceMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest} returns this
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.prototype.clearResourceMetricsList = function() {
  return this.setResourceMetricsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialSuccess: (f = msg.getPartialSuccess()) && proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
      reader.readMessage(value,proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.deserializeBinaryFromReader);
      msg.setPartialSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartialSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExportMetricsPartialSuccess partial_success = 1;
 * @return {?proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.getPartialSuccess = function() {
  return /** @type{?proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} */ (
    jspb.Message.getWrapperField(this, proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess, 1));
};


/**
 * @param {?proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess|undefined} value
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse} returns this
*/
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.setPartialSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse} returns this
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.clearPartialSuccess = function() {
  return this.setPartialSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.prototype.hasPartialSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    rejectedDataPoints: jspb.Message.getFieldWithDefault(msg, 1, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
  return proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRejectedDataPoints(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRejectedDataPoints();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 rejected_data_points = 1;
 * @return {number}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.getRejectedDataPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} returns this
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.setRejectedDataPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess} returns this
 */
proto.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.opentelemetry.proto.collector.metrics.v1);
