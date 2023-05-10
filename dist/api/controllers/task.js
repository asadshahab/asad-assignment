"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the user model
const Task_1 = __importDefault(require("../models/Task"));
class TaskController {
    // create task
    static createTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskData = yield yield Task_1.default.create(req.body);
                res.status(201).json({ success: true, data: taskData });
            }
            catch (error) {
                res.status(400).json({ message: error });
            }
        });
    }
    // Get Tasks
    static getTasks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskData = yield Task_1.default.find();
                if (taskData.length === 0) {
                    return res.status(400).json({ success: false, message: 'No tasks found' });
                }
                res.status(200).json({ success: true, data: taskData });
            }
            catch (error) {
                res.status(400).json({ message: error });
            }
        });
    }
}
exports.default = TaskController;
