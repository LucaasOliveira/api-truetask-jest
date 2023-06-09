"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTaskValidator = void 0;
const parseArchived = (archived) => {
    if (!archived) {
        return undefined;
    }
    if (archived !== "false" && archived !== "true") {
        throw new Error("Parâmetro inválido");
    }
    return archived !== "false";
};
const server_error_1 = require("../../../shared/errors/server.error");
class FilterTaskValidator {
    static async validate(req, res, next) {
        try {
            const { archived } = req.query;
            const archivedBoolean = parseArchived(archived);
            req.query.archived = archivedBoolean;
            next();
        }
        catch (error) {
            server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.FilterTaskValidator = FilterTaskValidator;
