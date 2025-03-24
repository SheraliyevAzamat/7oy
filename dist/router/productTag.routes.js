"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productTagRouter = void 0;
const productTag_controller_1 = require("../controller/productTag.controller");
const express_1 = require("express");
exports.productTagRouter = (0, express_1.Router)();
exports.productTagRouter.post('/', productTag_controller_1.productTagController.create);
exports.productTagRouter.get('/', productTag_controller_1.productTagController.getAll);
exports.productTagRouter.get('/:id', productTag_controller_1.productTagController.getOne);
exports.productTagRouter.put('/:id', productTag_controller_1.productTagController.update);
exports.productTagRouter.delete('/:id', productTag_controller_1.productTagController.delete);
