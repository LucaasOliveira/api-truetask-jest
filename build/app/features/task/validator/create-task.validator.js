"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskValidator = void 0;
const server_error_1 = require("../../../shared/errors/server.error");
const request_error_1 = require("../../../shared/errors/request.error");
class CreateTaskValidator {
    static async validate(req, res, next) {
        try {
            const { title, description } = req.body;
            if (title === "") {
                return request_error_1.RequestError.fieldNotProvided(res, "Título");
            }
            if (description === "") {
                return request_error_1.RequestError.fieldNotProvided(res, "Descrição");
            }
            next();
        }
        catch (error) {
            server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.CreateTaskValidator = CreateTaskValidator;
