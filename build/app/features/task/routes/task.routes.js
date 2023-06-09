"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = require("express");
const task_controller_1 = require("../../task/controller/task.controller");
const create_task_validator_1 = require("../validator/create-task.validator");
const filter_task_validator_1 = require("../validator/filter-task.validator");
const taskRoutes = () => {
    const router = (0, express_1.Router)();
    router.get("/:userId/tasks", filter_task_validator_1.FilterTaskValidator.validate, new task_controller_1.TaskController().list);
    router.get("/:userId/tasks/:taskId", new task_controller_1.TaskController().get);
    router.post("/:userId/tasks", create_task_validator_1.CreateTaskValidator.validate, new task_controller_1.TaskController().create);
    router.put("/:userId/tasks/:taskId", new task_controller_1.TaskController().update);
    router.delete("/:userId/tasks/:taskId", new task_controller_1.TaskController().delete);
    return router;
};
exports.taskRoutes = taskRoutes;
