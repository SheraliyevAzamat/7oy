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
exports.createOrder = createOrder;
exports.getAllOrders = getAllOrders;
exports.getOrderById = getOrderById;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
const config_1 = require("../config");
function createOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO orders (user_id, status, total) VALUES ($1, $2, $3) RETURNING *";
            const values = [order.user_id, order.status, order.total];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating order");
            throw new Error("Error creating order");
        }
    });
}
function getAllOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM orders";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all orders");
            throw new Error("Error getting all orders");
        }
    });
}
function getOrderById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM orders WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting order by id", error);
            throw new Error("Error getting order by id");
        }
    });
}
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE orders SET user_id=$1, status=$2, total=$3 WHERE id=$4 RETURNING *";
            const values = [order.user_id, order.status, order.total, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating order", error);
            throw new Error("Error updating order");
        }
    });
}
function deleteOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM orders WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting order", error);
            throw new Error("Error deleting order");
        }
    });
}
