"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
class Task {
    _title;
    _description;
    _archived;
    _id;
    constructor(_title, _description, _archived) {
        this._title = _title;
        this._description = _description;
        this._archived = _archived;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(detail) {
        this._title = detail;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get archived() {
        return this._archived;
    }
    set archived(archived) {
        this._archived = archived;
    }
    toJson() {
        return {
            id: this._id,
            title: this._title,
            description: this._description,
            archived: this._archived,
        };
    }
    static create(id, title, description, archived) {
        const task = new Task(title, description, archived);
        task._id = id;
        return task;
    }
}
exports.Task = Task;
