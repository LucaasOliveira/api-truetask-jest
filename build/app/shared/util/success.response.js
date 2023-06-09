"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
class SuccessResponse {
    static ok(res, message, data) {
        return res.status(200).send({
            ok: true,
            message,
            data,
        });
    }
    static created(res, message, data) {
        return res.status(201).send({
            ok: true,
            message,
            data,
        });
    }
}
exports.SuccessResponse = SuccessResponse;
