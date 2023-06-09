"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = void 0;
const redis_env_1 = require("../../app/envs/redis.env");
exports.redisConfig = {
    host: redis_env_1.redisEnv.host,
    username: redis_env_1.redisEnv.username,
    port: Number(redis_env_1.redisEnv.port),
    password: redis_env_1.redisEnv.password,
};
