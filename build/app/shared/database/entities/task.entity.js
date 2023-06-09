"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let TaskEntity = class TaskEntity {
    id;
    title;
    description;
    archived;
    drhrCriacao;
    drhrAtualizacao;
    user;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "id_task",
    }),
    __metadata("design:type", String)
], TaskEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], TaskEntity.prototype, "archived", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        // type: "timestamp",
        name: "dthr_criacao",
    }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "drhrCriacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        // type: "timestamp",
        name: "dthr_atualizacao",
    }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "drhrAtualizacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({
        name: "id_user",
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskEntity.prototype, "user", void 0);
TaskEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: "tasks",
    })
], TaskEntity);
exports.TaskEntity = TaskEntity;