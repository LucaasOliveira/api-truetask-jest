"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const server_env_1 = require("../../app/envs/server.env");
const express_config_1 = require("../config/express.config");
class Server {
    static run() {
        const app = (0, express_config_1.createApp)();
        app.listen(server_env_1.serverEnv.port, () => console.log("Server is running."));
    }
}
exports.Server = Server;
