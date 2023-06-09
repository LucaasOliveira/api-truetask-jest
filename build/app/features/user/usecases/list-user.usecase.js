"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../database/user.repository");
class ListUserUsecase {
    async execute() {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get("userList");
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Usuários listados com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const database = new user_repository_1.UserRepository();
        let user = await database.list();
        const result = user.map((user) => user.toJson());
        await cacheRepository.setEx(`userList`, result, 3600);
        return {
            ok: true,
            code: 200,
            message: "Usuários listados com sucesso!",
            data: result,
        };
    }
}
exports.ListUserUsecase = ListUserUsecase;
