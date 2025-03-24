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
exports.createProduct = createProduct;
exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const config_1 = require("../config");
function createProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO products (name, description, merchant_id, price) VALUES ($1, $2, $3, $4) RETURNING *";
            const values = [product.name, product.description, product.merchant_id, product.price,];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating product");
            throw new Error("Error creating product");
        }
    });
}
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM products";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all products");
            throw new Error("Error getting all products");
        }
    });
}
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM products WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting product by id");
            throw new Error("Error getting product by id");
        }
    });
}
function updateProduct(id, product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE products SET name=$1, description=$2, merchant_id=$3, price=$4 WHERE id=$5 RETURNING *";
            const values = [product.name, product.description, product.merchant_id, product.price, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating product");
            throw new Error("Error updating product");
        }
    });
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM products WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting product");
            throw new Error("Error deleting product");
        }
    });
}
