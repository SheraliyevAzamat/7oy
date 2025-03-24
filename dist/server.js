"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const api_routes_1 = require("./router/api.routes");
const tag_routes_1 = require("./router/tag.routes");
const productTag_routes_1 = require("./router/productTag.routes");
const app = (0, express_1.default)();
const PORT = 5001;
app.use(express_1.default.json());
app.use("/api/orders", router_1.orderRouter);
app.use("/api/users", router_1.userRouter);
app.use("/api/product-tags", productTag_routes_1.productTagRouter);
app.use("/api/products", router_1.productRouter);
app.use("/api/tags", tag_routes_1.tagRouter);
app.use("/api/merchant-activities", router_1.merchantActivityRouter);
app.use("/api/merchants", router_1.merchantRouter);
app.use("/api/countries", router_1.countryRouter);
app.use("/setup", router_1.setUpRouter);
app.use("/api", api_routes_1.apiRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
