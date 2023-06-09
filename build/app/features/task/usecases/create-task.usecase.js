"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUsecase = void 0;
const task_model_1 = require("../../../models/task.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const user_repository_1 = require("../../user/database/user.repository");
const task_repository_1 = require("../database/task.repository");
class CreateTaskUsecase {
    async execute(data) {
        const database = new user_repository_1.UserRepository();
        const user = await database.get(data.userId);
        if (!user) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado!",
            };
        }
        const newTask = new task_model_1.Task(data.title, data.description, data.archived);
        const task = await new task_repository_1.TaskRepository().create(data.userId, newTask);
        await new cache_repository_1.CacheRepository().delete(`getTask:${newTask.id}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${true}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${false}`);
        await new cache_repository_1.CacheRepository().delete(`listaTasks:${data.userId}-${undefined}`);
        return {
            ok: true,
            code: 201,
            message: "Task criada com sucesso!",
            data: task.toJson(),
        };
    }
}
exports.CreateTaskUsecase = CreateTaskUsecase;
