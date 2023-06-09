"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const server_error_1 = require("../../../shared/errors/server.error");
const create_user_usecase_1 = require("../usecases/create-user.usecase");
const list_user_usecase_1 = require("../usecases/list-user.usecase");
const get_user_usecase_1 = require("../usecases/get-user.usecase");
const login_user_usecase_1 = require("../usecases/login-user.usecase");
class UserController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await new login_user_usecase_1.LoginUsecase().execute(req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async createUser(req, res) {
        try {
            const { email, password } = req.body;
            const result = await new create_user_usecase_1.CreateUserUsecase().execute(req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async list(req, res) {
        try {
            const result = await new list_user_usecase_1.ListUserUsecase().execute();
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async getUser(req, res) {
        try {
            const { userId } = req.params;
            const result = await new get_user_usecase_1.GetUserUsecase().execute(userId);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.UserController = UserController;
