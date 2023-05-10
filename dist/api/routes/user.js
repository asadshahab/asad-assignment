"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../controllers/auth"));
const express_1 = require("express");
const auth_2 = require("../middlewares/auth");
// validation middleware
const validatorHandler_1 = __importDefault(require("../middlewares/validatorHandler"));
const userValidation_1 = __importDefault(require("../utils/userValidation"));
const userRouter = (0, express_1.Router)();
// register a user
userRouter.post('/register', (0, validatorHandler_1.default)(userValidation_1.default), auth_1.default.register);
userRouter.post('/login', auth_1.default.login);
userRouter.get('/', auth_2.Auth, auth_1.default.getUser);
exports.default = userRouter;
