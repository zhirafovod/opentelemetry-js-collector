// service: opentelemetry/proto/collector/profiles/v1experimental/profiles_service.proto
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

var opentelemetry_proto_profiles_v1experimental_profiles_pb = require('../../../../../opentelemetry/proto/profiles/v1experimental/profiles_pb.js');
goog.object.extend(proto, opentelemetry_proto_profiles_v1experimental_profiles_pb);
goog.exportSymbol('proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess', null, global);
goog.exportSymbol('proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest', null, global);
goog.exportSymbol('proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse', null, global);
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.repeatedFields_, null);
};
goog.inherits(proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.displayName = 'proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest';
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.displayName = 'proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse';
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.displayName = 'proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.repeatedFields_ = [1];



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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceProfilesList: jspb.Message.toObjectList(msg.getResourceProfilesList(),
    opentelemetry_proto_profiles_v1experimental_profiles_pb.ResourceProfiles.toObject, includeInstance)
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
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest;
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new opentelemetry_proto_profiles_v1experimental_profiles_pb.ResourceProfiles;
      reader.readMessage(value,opentelemetry_proto_profiles_v1experimental_profiles_pb.ResourceProfiles.deserializeBinaryFromReader);
      msg.addResourceProfiles(value);
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      opentelemetry_proto_profiles_v1experimental_profiles_pb.ResourceProfiles.serializeBinaryToWriter
    );
  }
};


/**
 * repeated opentelemetry.proto.profiles.v1experimental.ResourceProfiles resource_profiles = 1;
 * @return {!Array<!proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles>}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.getResourceProfilesList = function() {
  return /** @type{!Array<!proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles>} */ (
    jspb.Message.getRepeatedWrapperField(this, opentelemetry_proto_profiles_v1experimental_profiles_pb.ResourceProfiles, 1));
};


/**
 * @param {!Array<!proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles>} value
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} returns this
*/
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.setResourceProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.addResourceProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opentelemetry.proto.profiles.v1experimental.ResourceProfiles, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest} returns this
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceRequest.prototype.clearResourceProfilesList = function() {
  return this.setResourceProfilesList([]);
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialSuccess: (f = msg.getPartialSuccess()) && proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.toObject(includeInstance, f)
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
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse;
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess;
      reader.readMessage(value,proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.deserializeBinaryFromReader);
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartialSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExportProfilesPartialSuccess partial_success = 1;
 * @return {?proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.getPartialSuccess = function() {
  return /** @type{?proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} */ (
    jspb.Message.getWrapperField(this, proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess, 1));
};


/**
 * @param {?proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess|undefined} value
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse} returns this
*/
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.setPartialSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse} returns this
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.clearPartialSuccess = function() {
  return this.setPartialSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesServiceResponse.prototype.hasPartialSuccess = function() {
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    rejectedProfiles: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess;
  return proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRejectedProfiles(value);
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
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRejectedProfiles();
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
 * optional int64 rejected_profiles = 1;
 * @return {number}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.getRejectedProfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} returns this
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.setRejectedProfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess} returns this
 */
proto.opentelemetry.proto.collector.profiles.v1experimental.ExportProfilesPartialSuccess.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.opentelemetry.proto.collector.profiles.v1experimental);
