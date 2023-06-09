"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    _email;
    _password;
    _id;
    _tasks;
    constructor(_email, _password) {
        this._email = _email;
        this._password = _password;
        this._id = (0, uuid_1.v4)();
        this._tasks = [];
    }
    get tasks() {
        return this._tasks;
    }
    set tasks(tasks) {
        this._tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    get id() {
        return this._id;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    toJson() {
        return {
            id: this._id,
            email: this._email,
            password: this._password,
        };
    }
    static create(id, email, password, task) {
        const user = new User(email, password);
        user._id = id;
        return user;
    }
}
exports.User = User;
