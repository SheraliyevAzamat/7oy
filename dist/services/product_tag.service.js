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
exports.createProductTag = createProductTag;
exports.getALlProductag = getALlProductag;
exports.getOneProductTag = getOneProductTag;
exports.updateProductTag = updateProductTag;
exports.deleteProductTag = deleteProductTag;
const config_1 = require("../config");
function createProductTag(productTag) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO product_tags (tag_id,product_id) VALUES ($1, $2)RETURNING *";
            const values = [productTag.tag_id, productTag.product_id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating product tag", error);
            throw new Error("Error creating product tag");
        }
    });
}
function getALlProductag() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM product_tags ";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting");
            throw new Error("Error getting");
        }
    });
}
function getOneProductTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM product_tags WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting product tag by id", error);
            throw new Error("Error getting product tag by id");
        }
    });
}
function updateProductTag(id, productTag) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE product_tags SET tag_id=$1, product_id=$2 WHERE id=$3 RETURNING *";
            const values = [productTag.tag_id, productTag.product_id, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating product tag", error);
            throw new Error("Error updating product tag");
        }
    });
}
function deleteProductTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM product_tags WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting product tag", error);
            throw new Error("Error deleting product tag");
        }
    });
}
