"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormConnection = void 0;
const typeorm_config_1 = __importDefault(require("../config/typeorm.config"));
class TypeormConnection {
    static _connection;
    static async connect() {
        this._connection = await typeorm_config_1.default.initialize();
        console.log("Database connected");
    }
    static get connection() {
        if (!this._connection) {
            throw new Error("DB not connected");
        }
        return this._connection;
    }
}
exports.TypeormConnection = TypeormConnection;
