import protoLoader from '@grpc/proto-loader';

export const loadProto = (protoPath, includeDirs = []) => {
    return protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs,
    });
};
