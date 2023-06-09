"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheRepository = void 0;
const redis_connection_1 = require("../../../../main/database/redis.connection");
class CacheRepository {
    repository = redis_connection_1.RedisConnection.connection;
    async get(key) {
        const result = await this.repository.get(key);
        if (!result) {
            return null;
        }
        return JSON.parse(result);
    }
    async delete(key) {
        await this.repository.del(key);
    }
    async setEx(key, value, ttl) {
        await this.repository.set(key, JSON.stringify(value), "EX", ttl);
    }
    async set(key, value) {
        await this.repository.set(key, JSON.stringify(value));
    }
}
exports.CacheRepository = CacheRepository;
