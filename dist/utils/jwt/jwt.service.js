"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config");
const generateAccessToken = (payload) => {
    try {
        const token = jsonwebtoken_1.default.sign(payload, config_1.config.jwt.access.secret, {
            expiresIn: 1,
        });
        return token;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (payload) => {
    try {
        const token = jsonwebtoken_1.default.sign(payload, config_1.config.jwt.refresh.secret, {
            expiresIn: config_1.config.jwt.refresh.expiresIn,
        });
        return token;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.generateRefreshToken = generateRefreshToken;
