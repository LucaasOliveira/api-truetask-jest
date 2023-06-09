"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsecase = void 0;
const user_repository_1 = require("../database/user.repository");
class LoginUsecase {
    async execute(data) {
        const repository = new user_repository_1.UserRepository();
        const user = await repository.login(data.email, data.password);
        if (!user) {
            return {
                ok: false,
                code: 401,
                message: "Usuário não autorizado.",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Login feito com sucesso!",
            data: { id: user.id },
        };
    }
}
exports.LoginUsecase = LoginUsecase;
