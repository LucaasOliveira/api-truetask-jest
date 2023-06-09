"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const task_model_1 = require("../../../models/task.model");
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const task_entity_1 = require("../../../shared/database/entities/task.entity");
class TaskRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(task_entity_1.TaskEntity);
    async list(id, archived) {
        const where = {
            user: {
                id,
            },
        };
        const filterArchived = archived === null || archived === undefined ? {} : { archived };
        const result = await this.repository.find({
            where: { ...where, ...filterArchived },
        });
        return result.map((task) => TaskRepository.mapEntityModel(task));
    }
    static mapEntityModel(entity) {
        return task_model_1.Task.create(entity.id, entity.title, entity.description, entity.archived);
    }
    async create(id, task) {
        const taskEntity = this.repository.create({
            id: task.id,
            title: task.title,
            description: task.description,
            archived: task.archived,
            user: {
                id: id,
            },
        });
        const result = await this.repository.save(taskEntity);
        return TaskRepository.mapEntityModel(result);
    }
    async get(id) {
        const result = await this.repository.findOneBy({ id });
        if (!result) {
            return 0;
        }
        return TaskRepository.mapEntityModel(result);
    }
    async update(id, title, description, archived) {
        const result = await this.repository.update({
            id,
        }, {
            title,
            description,
            archived,
            drhrAtualizacao: new Date(),
        });
        if (result.affected === 1) {
            return {
                id,
                title,
                description,
                archived,
            };
        }
        return null;
    }
    async delete(id) {
        const result = await this.repository.delete({
            id,
        });
        return result.affected ?? 0;
    }
}
exports.TaskRepository = TaskRepository;
