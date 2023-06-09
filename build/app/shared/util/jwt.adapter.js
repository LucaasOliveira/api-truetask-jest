"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_env_1 = require("../../envs/auth.env");
class JwtAdapter {
    static createToken(data) {
        return jsonwebtoken_1.default.sign(data, auth_env_1.authEnv.secret, {
            expiresIn: "10h",
        });
    }
    static checkToken(token) {
        return jsonwebtoken_1.default.verify(token, auth_env_1.authEnv.secret);
    }
}
exports.JwtAdapter = JwtAdapter;
