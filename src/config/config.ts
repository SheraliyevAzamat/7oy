import { config as dotConfig } from "dotenv";

dotConfig();

export const config = {
    jwt: {
        access: {
            secret: process.env.JWT_ACCESS_SECRET,
            expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
        },
        refresh: {
            secret: process.env.JWT_REFRESH_SECRET,
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
        }
    },
    mailer:{
        email:process.env.MAIL_USER,
        password:process.env.MAIL_PASS,
    },
};