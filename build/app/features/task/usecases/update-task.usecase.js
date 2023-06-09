"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../../user/database/user.repository");
const task_repository_1 = require("../database/task.repository");
class UpdateTaskUsecase {
    async execute(data) {
        const user = await new user_repository_1.UserRepository().get(data.userId);
        if (!user) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado!",
            };
        }
        const database = new task_repository_1.TaskRepository();
        const result = await database.update(data.taskId, data.title, data.description, data.archived);
        if (!result) {
            return {
                ok: false,
                code: 404,
                message: "Task não encontrada!",
            };
        }
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${true}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${false}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${undefined}`);
        await new cache_repository_1.CacheRepository().delete(`getTask:${data.taskId}`);
        return {
            ok: true,
            code: 200,
            message: "Task editada com sucesso!",
            data: result,
        };
    }
}
exports.UpdateTaskUsecase = UpdateTaskUsecase;
