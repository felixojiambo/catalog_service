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
exports.RequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validationError = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = yield (0, class_validator_1.validate)(input, {
        validationError: { target: true },
    });
    if (errors.length) {
        return errors;
    }
    return false;
});
const RequestValidator = (type, body) => __awaiter(void 0, void 0, void 0, function* () {
    const input = (0, class_transformer_1.plainToClass)(type, body);
    const errors = yield validationError(input);
    if (errors) {
        const errorMessage = errors
            .map((error) => Object.values(error.constraints))
            .join(", ");
        return { errors: errorMessage, input };
    }
    return { errors: false, input };
});
exports.RequestValidator = RequestValidator;
