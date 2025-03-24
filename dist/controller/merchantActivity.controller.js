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
exports.merchantActivityController = void 0;
const merchantActivity_service_1 = require("../services/merchantActivity.service");
exports.merchantActivityController = {
    //create
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, merchantActivity_service_1.createMerchantActivity)(body);
                res.status(201).send(result);
            }
            catch (error) {
            }
        });
    },
    //read all
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, merchantActivity_service_1.getAllMerchantActivities)();
                res.send(result);
            }
            catch (error) {
            }
        });
    },
    //read by id
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield (0, merchantActivity_service_1.getMerchantActivityById)(id);
                res.send(result);
            }
            catch (error) {
            }
        });
    },
    //update
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const body = req.body;
                const updatedMerchantActivity = yield (0, merchantActivity_service_1.updateMerchantActivity)(id, body);
                res.send(updatedMerchantActivity);
            }
            catch (error) {
            }
        });
    },
    //delete
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield (0, merchantActivity_service_1.deleteMerchantActivity)(id);
                res.status(204).send();
            }
            catch (error) {
            }
        });
    }
};
