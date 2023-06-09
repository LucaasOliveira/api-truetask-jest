"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../../user/database/user.repository");
const task_repository_1 = require("../database/task.repository");
class ListTasksUsecase {
    async execute(userId, archived) {
        const user = await new user_repository_1.UserRepository().get(userId);
        if (!user) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado!",
            };
        }
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get(`listaTasks:${userId}-${archived}`);
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Tasks listadas com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const database = new task_repository_1.TaskRepository();
        let list = await database.list(userId, archived);
        let result = list.map((task) => task.toJson());
        await cacheRepository.setEx(`listaTasks:${userId}-${archived}`, result, 3600);
        return {
            ok: true,
            code: 200,
            message: "Tasks listadas com sucesso!",
            data: result,
        };
    }
}
exports.ListTasksUsecase = ListTasksUsecase;
