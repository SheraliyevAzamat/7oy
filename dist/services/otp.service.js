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
exports.saveOtp = saveOtp;
exports.getByUserId = getByUserId;
exports.deleteByUserId = deleteByUserId;
exports.generateOtp = generateOtp;
const config_1 = require("../config");
function saveOtp(user_id, otp, expires_at) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      INSERT INTO ecommerce.otp (user_id, otp, expires_at)
      VALUES ($1, $2, $3)
    `;
            const otpData = (yield config_1.pool.query(query, [user_id, otp, expires_at])).rows[0];
            return otpData;
        }
        catch (error) {
            console.error("Error creating otp ", error);
            throw new Error("Failed to create OTP");
        }
    });
}
function getByUserId(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      SELECT otp, expires_at
      FROM ecommerce.otp
      WHERE user_id = $1
    `;
            const result = yield config_1.pool.query(query, [user_id]);
            return result.rows.length ? result.rows[0] : null;
        }
        catch (error) {
            console.error("Error get otp", error);
            throw new Error("Failed to fetch OTP");
        }
    });
}
function deleteByUserId(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      DELETE FROM ecommerce.otp
      WHERE user_id = $1
    `;
            yield config_1.pool.query(query, [user_id]);
        }
        catch (error) {
            console.error("Error deleting otp", error);
            throw new Error("Failed to delete OTP");
        }
    });
}
function generateOtp() {
    return String(Math.floor(Math.random() * 10 ** 6));
}
