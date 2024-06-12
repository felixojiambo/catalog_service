"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const catalog_apis_1 = __importDefault(require("./apis/catalog.apis"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(utils_1.httpLogger);
app.use("/", catalog_apis_1.default);
app.use(utils_1.HandleErrorWithLogger);
exports.default = app;
