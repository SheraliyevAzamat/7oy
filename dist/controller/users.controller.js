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
exports.userController = void 0;
const users_service_1 = require("../services/users.service");
exports.userController = {
    //create
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield (0, users_service_1.createUser)(body);
                res.status(201).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //get all
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, users_service_1.getAllUsers)();
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
    //get one
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const result = yield (0, users_service_1.getOneUser)(userId);
                res.status(200).send(result);
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
                const userId = parseInt(req.params.id);
                const body = req.body;
                const result = yield (0, users_service_1.updateUser)(userId, body);
                res.status(200).send(result);
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
                const userId = parseInt(req.params.id);
                const result = yield (0, users_service_1.deleteUser)(userId);
                res.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
    },
};
