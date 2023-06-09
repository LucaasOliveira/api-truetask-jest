"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUsecase = void 0;
const user_repository_1 = require("../database/user.repository");
class GetUserUsecase {
    async execute(idUser) {
        const repository = new user_repository_1.UserRepository();
        const getUser = await repository.get(idUser);
        if (!getUser) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado!",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Usuário obtido com sucesso!",
            data: getUser.toJson(),
        };
    }
}
exports.GetUserUsecase = GetUserUsecase;
