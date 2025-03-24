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
exports.createORderItem = createORderItem;
exports.getAllOrderItems = getAllOrderItems;
exports.getOrderItemById = getOrderItemById;
exports.updateOrderItem = updateOrderItem;
exports.deleteOrderItem = deleteOrderItem;
const config_1 = require("../config");
function createORderItem(orderItem) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *";
            const values = [orderItem.order_id, orderItem.product_id, orderItem.quantity, orderItem.price];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating order item");
            throw new Error("Error creating order item");
        }
    });
}
function getAllOrderItems() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM order_items";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all order items");
            throw new Error("Error getting all order items");
        }
    });
}
function getOrderItemById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM order_items WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting order item by id", error);
            throw new Error("Error getting order item by id");
        }
    });
}
function updateOrderItem(id, orderItem) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE order_items SET order_id=$1, product_id=$2, quantity=$3, price=$4 WHERE id=$5 RETURNING *";
            const values = [orderItem.order_id, orderItem.product_id, orderItem.quantity, orderItem.price, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating order item", error);
            throw new Error("Error updating order item");
        }
    });
}
function deleteOrderItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM order_items WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting order item", error);
            throw new Error("Error deleting order item");
        }
    });
}
