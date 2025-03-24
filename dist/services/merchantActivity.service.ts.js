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
exports.AuthService = void 0;
const utils_1 = require("../utils");
const otp_service_1 = require("./otp.service");
const user_service_1 = require("./user.service");
const jwt_service_1 = require("../utils/jwt/jwt.service");
exports.AuthService = {
    register(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExists = yield (0, user_service_1.isEmailExists)(body.email);
            if (isUserExists) {
                throw new Error("Email already exists");
            }
            const user = yield (0, user_service_1.createUser)(body);
            const otp = (0, otp_service_1.generateOtp)();
            const expires_at = new Date(Date.now() + 10 * 60 * 1000);
            yield Promise.all([
                (0, utils_1.sendOtp)(body.email, otp),
                (0, otp_service_1.saveOtp)(user.id, otp, expires_at),
            ]);
            delete user.password;
            return user;
        });
    },
    verify(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const otpData = yield (0, otp_service_1.getByUserId)(body.user_id);
            const now = new Date(Date.now());
            if (body.otp !== otpData.otp) {
                throw new Error("Invalid otp");
            }
            if (otpData.expires_at < now) {
                throw new Error("Otp expired");
            }
            yield (0, user_service_1.update)(body.user_id, { is_active: true });
        });
    },
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, user_service_1.findOneByEmail)(body.email);
            const checkPassword = (0, utils_1.compare)(body.password, user.password);
            if (!user.is_active) {
                throw new Error("User is not activated");
            }
            if (!checkPassword) {
                throw new Error("Invalid password");
            }
            const payload = {
                id: user.id,
            };
            const accessToken = (0, jwt_service_1.generateAccessToken)(payload);
            const refreshToken = (0, jwt_service_1.generateRefreshToken)(payload);
            return {
                accessToken,
                refreshToken,
            };
        });
    },
};
