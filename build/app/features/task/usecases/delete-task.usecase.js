"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../../user/database/user.repository");
const task_repository_1 = require("../database/task.repository");
class DeleteTaskUsecase {
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
        const task = await database.get(data.taskId);
        if (task === 0) {
            return {
                ok: false,
                code: 404,
                message: "Task não encontrada!",
            };
        }
        await database.delete(data.taskId);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${true}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${false}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${undefined}`);
        await new cache_repository_1.CacheRepository().delete(`getTask:${data.taskId}`);
        return {
            ok: true,
            code: 200,
            message: "Task excluída com sucesso!",
            data: data.taskId,
        };
    }
}
exports.DeleteTaskUsecase = DeleteTaskUsecase;
