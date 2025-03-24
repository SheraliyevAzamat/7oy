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
exports.productTagController = void 0;
const product_tag_service_1 = require("../services/product_tag.service");
exports.productTagController = {
    //create
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, product_tag_service_1.createProductTag)(body);
                res.status(201).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //read all
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, product_tag_service_1.getALlProductag)();
                res.send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //read by id
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield (0, product_tag_service_1.getOneProductTag)(id);
                res.send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //update
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const body = req.body;
                const updatedProductTag = yield (0, product_tag_service_1.updateProductTag)(id, body);
                res.send(updatedProductTag);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //delete
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield (0, product_tag_service_1.deleteProductTag)(id);
                res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
};
