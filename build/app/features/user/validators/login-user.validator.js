"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = void 0;
const request_error_1 = require("../../../shared/errors/request.error");
const server_error_1 = require("../../../shared/errors/server.error");
class LoginValidator {
    static async validate(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                return request_error_1.RequestError.fieldNotProvided(res, "E-mail");
            }
            if (!password) {
                return request_error_1.RequestError.fieldNotProvided(res, "Senha");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.LoginValidator = LoginValidator;
