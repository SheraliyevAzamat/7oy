"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = validateData;
const http_status_codes_1 = require("http-status-codes");
const zod_1 = require("zod");
function validateData(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ error: error.message });
            }
            else {
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
            }
        }
    };
}
