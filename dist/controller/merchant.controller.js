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
exports.merchantController = void 0;
const merchants_service_1 = require("../services/merchants.service");
exports.merchantController = {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, merchants_service_1.createMerchant)(body);
                res.status(201).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, merchants_service_1.getAllMerchants)();
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const merchantId = parseInt(req.params.id);
                const result = yield (0, merchants_service_1.getMerchantById)(merchantId);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const merchantId = parseInt(req.params.id);
                const updatedMerchant = req.body;
                const result = yield (0, merchants_service_1.updateMerchant)(merchantId, updatedMerchant);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const merchantId = parseInt(req.params.id);
                const result = yield (0, merchants_service_1.deleteMerchant)(merchantId);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
};
