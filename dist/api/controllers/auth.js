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
const User_1 = __importDefault(require("../models/User"));
// import bcrypt fun from common
const bcrypt_1 = require("../common/bcrypt");
// import jwt fun from common
const jwt_1 = require("../common/jwt");
class UserController {
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { password } = req.body;
                // bcrypt password
                password = yield (0, bcrypt_1.encryptPassword)(password);
                req.body.password = password;
                const user = yield User_1.default.create(req.body);
                res.status(201).json({ success: true, data: user });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
    // login user
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // check if user exists
                const user = yield User_1.default.findOne({ email }).select('+password');
                if (!user) {
                    return res.status(400).json({ success: false, message: 'Invalid credentials' });
                }
                // check if password is correct
                const isMatch = yield (0, bcrypt_1.comparePassword)(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Invalid credentials' });
                }
                // generate token
                const token = (0, jwt_1.generateToken)(user._id);
                return res.status(200).json({ success: true, token });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
    // get user loginUser
    static getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.user;
                const user = yield User_1.default.findOne({ _id: userId });
                if (!user) {
                    return res.status(400).json({ success: false, message: 'User not found' });
                }
                res.status(200).json({ success: true, data: user });
            }
            catch (error) {
                res.status(400).json({ message: error });
            }
        });
    }
}
exports.default = UserController;
