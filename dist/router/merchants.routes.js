"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchantRouter = void 0;
const merchant_controller_1 = require("../controller/merchant.controller");
const express_1 = require("express");
exports.merchantRouter = (0, express_1.Router)();
exports.merchantRouter.post('/', merchant_controller_1.merchantController.create);
exports.merchantRouter.get('/', merchant_controller_1.merchantController.getAll);
exports.merchantRouter.get('/:id', merchant_controller_1.merchantController.getOne);
exports.merchantRouter.put('/:id', merchant_controller_1.merchantController.update);
exports.merchantRouter.delete('/:id', merchant_controller_1.merchantController.delete);
