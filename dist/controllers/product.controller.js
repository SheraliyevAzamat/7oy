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
exports.productController = void 0;
const product_service_1 = require("../services/product.service");
exports.productController = {
    //create
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, product_service_1.createProduct)(body);
                res.status(201).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //get all products
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield (0, product_service_1.getAllProducts)();
                res.send(products);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //get product by id
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const product = yield (0, product_service_1.getProductById)(id);
                res.send(product);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //update product by id
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const body = req.body;
                const updatedProduct = yield (0, product_service_1.updateProduct)(id, body);
                res.send(updatedProduct);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //delete product by id
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield (0, product_service_1.deleteProduct)(id);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
};
