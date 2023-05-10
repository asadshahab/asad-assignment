"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./api/routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// middleware 
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World");
});
(0, database_1.default)();
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
