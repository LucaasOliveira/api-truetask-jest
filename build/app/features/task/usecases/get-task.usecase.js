"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const task_repository_1 = require("../database/task.repository");
class GetTaskUsecase {
    async execute(taskId) {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get(`getTask:${taskId}`);
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Task listada com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const database = new task_repository_1.TaskRepository();
        let task = await database.get(taskId);
        if (task === 0) {
            return {
                ok: false,
                code: 404,
                message: "Task não encontrada!",
            };
        }
        await cacheRepository.setEx(`getTask:${taskId}`, task, 3600);
        return {
            ok: true,
            code: 200,
            message: "Task listada com sucesso!",
            data: task,
        };
    }
}
exports.GetTaskUsecase = GetTaskUsecase;
