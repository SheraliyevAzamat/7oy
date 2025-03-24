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
exports.countryController = void 0;
const country_service_1 = require("../services/country.service");
exports.countryController = {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, country_service_1.createCountry)(body);
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
                const result = yield (0, country_service_1.getAllCountry)();
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
                const countryId = parseInt(req.params.id);
                const result = yield (0, country_service_1.getOneCountry)(countryId);
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
                const countryId = parseInt(req.params.id);
                const body = req.body;
                const result = yield (0, country_service_1.updateCountry)(countryId, body);
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
                const countryId = parseInt(req.params.id);
                const result = yield (0, country_service_1.deleteCountry)(countryId);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
};
