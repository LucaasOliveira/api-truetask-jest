"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUsecase = void 0;
const user_model_1 = require("../../../models/user.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../database/user.repository");
class CreateUserUsecase {
    async execute(data) {
        const repository = new user_repository_1.UserRepository();
        const email = await repository.getByEmail(data.email);
        if (email !== null) {
            return {
                ok: false,
                code: 400,
                message: "Usuário já existe!",
            };
        }
        const user = new user_model_1.User(data.email, data.password);
        const result = await repository.create(user);
        await new cache_repository_1.CacheRepository().delete(`userList`);
        return {
            ok: true,
            code: 201,
            message: "Usuário criado com sucesso!",
            data: result.toJson(),
        };
    }
}
exports.CreateUserUsecase = CreateUserUsecase;
