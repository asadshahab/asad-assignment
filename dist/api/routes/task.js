"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../controllers/task"));
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
// validation handler
const validatorHandler_1 = __importDefault(require("../middlewares/validatorHandler"));
const taskValidation_1 = __importDefault(require("../utils/taskValidation"));
const taskRouter = (0, express_1.Router)();
taskRouter.post('/create-task', auth_1.Auth, (0, validatorHandler_1.default)(taskValidation_1.default), task_1.default.createTask);
taskRouter.post('/list-tasks', auth_1.Auth, task_1.default.getTasks);
exports.default = taskRouter;
