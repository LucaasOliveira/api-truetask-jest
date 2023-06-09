"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const create_user_validator_1 = require("../validators/create-user.validator");
const login_user_validator_1 = require("../validators/login-user.validator");
const userRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/", create_user_validator_1.CreateUserValidator.validate, new user_controller_1.UserController().createUser);
    router.get("/", new user_controller_1.UserController().list);
    router.get("/:userId", new user_controller_1.UserController().getUser);
    router.post("/login", login_user_validator_1.LoginValidator.validate, new user_controller_1.UserController().login);
    return router;
};
exports.userRoutes = userRoutes;
