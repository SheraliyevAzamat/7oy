"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const services_1 = require("../services");
const router = express_1.default.Router();
exports.authRouter = router;
//signin - login
//signup - register
//profile
//refreshToken
router.get("/", (req, res, next) => {
    try {
        (0, services_1.setUpDB)();
        res.send("table created");
    }
    catch (error) {
        next(error);
    }
});
