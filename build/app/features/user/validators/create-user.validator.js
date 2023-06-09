"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidator = void 0;
const server_error_1 = require("../../../shared/errors/server.error");
const request_error_1 = require("../../../shared/errors/request.error");
class CreateUserValidator {
    static async validate(req, res, next) {
        try {
            const { email, password } = req.body;
            if (email === "") {
                return request_error_1.RequestError.fieldNotProvided(res, "E-mail");
            }
            if (password === "") {
                return request_error_1.RequestError.fieldNotProvided(res, "Senha");
            }
            if (password.length < 6) {
                return request_error_1.RequestError.fieldNotProvided(res, "Senha");
            }
            next();
        }
        catch (error) {
            server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.CreateUserValidator = CreateUserValidator;
