"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const server_error_1 = require("../../../shared/errors/server.error");
const list_tasks_usecase_1 = require("../usecases/list-tasks.usecase");
const create_task_usecase_1 = require("../usecases/create-task.usecase");
const update_task_usecase_1 = require("../usecases/update-task.usecase");
const delete_task_usecase_1 = require("../usecases/delete-task.usecase");
const get_task_usecase_1 = require("../usecases/get-task.usecase");
class TaskController {
    async list(req, res) {
        try {
            const { userId } = req.params;
            const { archived } = req.query;
            const result = await new list_tasks_usecase_1.ListTasksUsecase().execute(userId, archived);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async create(req, res) {
        try {
            const { userId } = req.params;
            const { title, description, archived } = req.body;
            const result = await new create_task_usecase_1.CreateTaskUsecase().execute({
                userId,
                title,
                description,
                archived,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async update(req, res) {
        try {
            const { userId, taskId } = req.params;
            const { title, description, archived } = req.body;
            const result = await new update_task_usecase_1.UpdateTaskUsecase().execute({
                userId,
                taskId,
                title,
                description,
                archived,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async delete(req, res) {
        try {
            const { userId, taskId } = req.params;
            const result = await new delete_task_usecase_1.DeleteTaskUsecase().execute({ userId, taskId });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    async get(req, res) {
        try {
            const { userId, taskId } = req.params;
            const result = await new get_task_usecase_1.GetTaskUsecase().execute(taskId);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.TaskController = TaskController;
