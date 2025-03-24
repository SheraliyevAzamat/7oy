import { config } from "../../config";
import nodemalier from "nodemailer"
import dotenv from "dotenv";

dotenv.config();

const mailTransform = nodemalier.createTransport({
    service:"gmail",
    auth:{
        user:config.mailer.email,
        pass:config.mailer.password
    },
});

export async function sendOtp(to:string, otp:string){
    try {
        await mailTransform.sendMail({
            from: config.mailer.email,
            to: to,
            subject: "OTP Verification",
            text: `Your OTP is ${otp}`
        })
        
    } catch (error) {
        console.error("falied to send otp",error);
        throw new Error ("failed to send otp")
    }
}

export async function sendResetPasswordLink(to:string, token:string){
    try {
        await mailTransform.sendMail({
            from: config.mailer.email,
            to: to,
            subject: "Password Reset Link",
            html: `<h2>Reset Your Password</h2>
            <p>Click the button below to reset your password.</p>
            <a href="https://example.com/change-password?token=${token}" style="display:inline-block;padding:10px 20px;background:#007bff;color:#fff;text-decoration:none;border-radius:5px;">Reset Password</a>`,
     })
    } catch (error) {
        console.error("failed to send password reset email:",error);
        throw new Error("failed to send password reset email");
    }
}

export async function sendActivationLink(to: string, token: string) {
    try {
      await mailTransform.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "Activate Your Account",
        html: `<h2>Activate Your Email</h2>
                 <p>Click the button below to activate your email.</p>
                 <a href="http://localhost:3000/admin/verify?token=${token}" style="display:inline-block;padding:10px 20px;background:#28a745;color:#fff;text-decoration:none;border-radius:5px;">Activate</a>`,
      });
    } catch (error) {
      console.error("Failed to send activation email:", error);
      throw new Error("Failed to send activation email");
    }
  }
  