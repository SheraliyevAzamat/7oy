import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ZodError } from "zod";

export function validateData(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
            }
        }
    };
}