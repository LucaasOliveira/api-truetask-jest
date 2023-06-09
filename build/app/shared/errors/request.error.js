"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
class RequestError {
    static fieldNotProvided(res, field) {
        return res.status(400).send({
            ok: false,
            message: field + " não fornecido(a).",
        });
    }
    static notFound(res, entity) {
        return res.status(404).send({
            ok: false,
            message: entity + " não encontrado.",
        });
    }
    static unauthorized(res, field) {
        return res.status(401).send({
            ok: false,
            message: field + " não autorizado(a).",
        });
    }
    static invalidQueryParam(res, field) {
        return res.status(400).send({
            ok: false,
            message: "Valor inválido para " + field,
        });
    }
}
exports.RequestError = RequestError;
