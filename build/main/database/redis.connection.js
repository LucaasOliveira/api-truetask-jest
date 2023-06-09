"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConnection = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const redis_config_1 = require("../config/redis.config");
class RedisConnection {
    static _connection;
    static async connect() {
        this._connection = new ioredis_1.default(redis_config_1.redisConfig);
        console.log("Redis is connected.");
    }
    static get connection() {
        return this._connection;
    }
}
exports.RedisConnection = RedisConnection;
