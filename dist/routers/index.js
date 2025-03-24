"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const setup_1 = require("./setup");
const auth_routes_1 = require("./auth.routes");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.use("/setup", setup_1.setUpRouter);
exports.appRouter.use('/auth', auth_routes_1.authRouter);
exports.appRouter.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
