"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authGuard = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            res.status(401).json({ message: "unauthorized" });
        }
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (!token) {
            throw new Error("no token,authorization denided");
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                throw new Error("unauthorized:invalid token");
            }
            req.user = { id: decoded.id };
        });
        next();
    }
    catch (error) {
        res.status(403).json({ message: "invalid or expired token" });
    }
};
exports.authGuard = authGuard;
