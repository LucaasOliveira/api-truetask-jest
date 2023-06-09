"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_model_1 = require("../../../models/user.model");
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const user_entity_1 = require("../../../shared/database/entities/user.entity");
class UserRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(user_entity_1.UserEntity);
    async create(user) {
        const userEntity = this.repository.create({
            id: user.id,
            email: user.email,
            password: user.password,
        });
        const result = await this.repository.save(userEntity);
        return UserRepository.mapEntityToModel(result);
    }
    async list() {
        const result = await this.repository.find();
        return result.map((user) => UserRepository.mapEntityToModel(user));
    }
    static mapEntityToModel(entity) {
        return user_model_1.User.create(entity.id, entity.email, entity.password);
    }
    async get(id) {
        const result = await this.repository.findOneBy({
            id,
        });
        if (!result) {
            return null;
        }
        return UserRepository.mapEntityToModel(result);
    }
    async getByEmail(email) {
        const result = await this.repository.findOneBy({
            email,
        });
        if (!result) {
            return null;
        }
        return UserRepository.mapEntityToModel(result);
    }
    async login(email, password) {
        const result = await this.repository.findOne({
            where: {
                email,
                password,
            },
        });
        if (!result) {
            return null;
        }
        return UserRepository.mapEntityToModel(result);
    }
}
exports.UserRepository = UserRepository;
