"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_connection_1 = require("./main/database/typeorm.connection");
const redis_connection_1 = require("./main/database/redis.connection");
const express_server_1 = require("./main/server/express.server");
Promise.all([typeorm_connection_1.TypeormConnection.connect(), redis_connection_1.RedisConnection.connect()]).then(express_server_1.Server.run);
