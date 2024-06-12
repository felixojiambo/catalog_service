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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleUnCaughtException = exports.HandleErrorWithLogger = void 0;
const errors_1 = require("./errors");
const logger_1 = require("../logger");
const HandleErrorWithLogger = (error, req, res, next) => {
    let reportError = true;
    let status = 500;
    let data = error.message;
    // skip common / known errors
    [errors_1.NotFoundError, errors_1.ValidationError, errors_1.AuthorizeError].forEach((typeOfError) => {
        if (error instanceof typeOfError) {
            reportError = false;
            status = error.status;
            data = error.message;
        }
    });
    if (reportError) {
        // error reporting tools implementation eg: Cloudwatch,Sentry etc;
        logger_1.logger.error(error);
    }
    else {
        logger_1.logger.warn(error); // ignore common errors caused by user
    }
    return res.status(status).json(data);
};
exports.HandleErrorWithLogger = HandleErrorWithLogger;
const HandleUnCaughtException = (error) => __awaiter(void 0, void 0, void 0, function* () {
    // error report / monitoring tools
    logger_1.logger.error(error);
    // recover
    process.exit(1);
});
exports.HandleUnCaughtException = HandleUnCaughtException;
