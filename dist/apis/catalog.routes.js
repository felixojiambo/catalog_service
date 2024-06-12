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
exports.catalogService = void 0;
const express_1 = __importDefault(require("express"));
;
const catalog_repository_1 = require("../repository/catalog.repository");
const requestValidator_1 = require("../utils/requestValidator");
const product_dto_1 = require("../dto/product.dto");
const catalog_service_1 = require("../service/catalog.service");
const router = express_1.default.Router();
exports.catalogService = new catalog_service_1.CatalogService(new catalog_repository_1.CatalogRepository());
// endpoints
router.post("/products", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { errors, input } = yield (0, requestValidator_1.RequestValidator)(product_dto_1.CreateProductRequest, req.body);
        if (errors)
            return res.status(400).json(errors);
        const data = yield exports.catalogService.createProduct(input);
        return res.status(201).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
router.patch("/products/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { errors, input } = yield (0, requestValidator_1.RequestValidator)(product_dto_1.UpdateProductRequest, req.body);
        const id = parseInt(req.params.id) || 0;
        if (errors)
            return res.status(400).json(errors);
        const data = yield exports.catalogService.updateProduct(Object.assign({ id }, input));
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
router.get("/products", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = Number(req.query["limit"]);
    const offset = Number(req.query["offset"]);
    try {
        const data = yield exports.catalogService.getProducts(limit, offset);
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
router.get("/products/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id) || 0;
    try {
        const data = yield exports.catalogService.getProduct(id);
        return res.status(200).json(data);
    }
    catch (error) {
        return next(error);
    }
}));
router.delete("/products/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id) || 0;
    try {
        const data = yield exports.catalogService.deleteProduct(id);
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
exports.default = router;
