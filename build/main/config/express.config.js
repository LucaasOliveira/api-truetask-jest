"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../../app/features/user/routes/user.routes");
const task_routes_1 = require("../../app/features/task/routes/task.routes");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use("/user", (0, user_routes_1.userRoutes)());
    app.use("/user", (0, task_routes_1.taskRoutes)());
    return app;
};
exports.createApp = createApp;
