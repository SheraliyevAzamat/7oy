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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = sendOtp;
exports.sendResetPasswordLink = sendResetPasswordLink;
exports.sendActivationLink = sendActivationLink;
const config_1 = require("../../config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mailTransform = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: config_1.config.mailer.email,
        pass: config_1.config.mailer.password
    },
});
function sendOtp(to, otp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mailTransform.sendMail({
                from: config_1.config.mailer.email,
                to: to,
                subject: "OTP Verification",
                text: `Your OTP is ${otp}`
            });
        }
        catch (error) {
            console.error("falied to send otp", error);
            throw new Error("failed to send otp");
        }
    });
}
function sendResetPasswordLink(to, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mailTransform.sendMail({
                from: config_1.config.mailer.email,
                to: to,
                subject: "Password Reset Link",
                html: `<h2>Reset Your Password</h2>
            <p>Click the button below to reset your password.</p>
            <a href="https://example.com/change-password?token=${token}" style="display:inline-block;padding:10px 20px;background:#007bff;color:#fff;text-decoration:none;border-radius:5px;">Reset Password</a>`,
            });
        }
        catch (error) {
            console.error("failed to send password reset email:", error);
            throw new Error("failed to send password reset email");
        }
    });
}
function sendActivationLink(to, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mailTransform.sendMail({
                from: process.env.EMAIL_USER,
                to,
                subject: "Activate Your Account",
                html: `<h2>Activate Your Email</h2>
                 <p>Click the button below to activate your email.</p>
                 <a href="http://localhost:3000/admin/verify?token=${token}" style="display:inline-block;padding:10px 20px;background:#28a745;color:#fff;text-decoration:none;border-radius:5px;">Activate</a>`,
            });
        }
        catch (error) {
            console.error("Failed to send activation email:", error);
            throw new Error("Failed to send activation email");
        }
    });
}
