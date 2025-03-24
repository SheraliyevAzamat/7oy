
import { pool } from "../config";
import { IOrderItem } from "../constants";

export async function createORderItem(orderItem:IOrderItem) {
    try {
        const query = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [orderItem.order_id, orderItem.product_id, orderItem.quantity, orderItem.price]
        
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error creating order item");
        throw new Error("Error creating order item");
    }
}

export async function getAllOrderItems() {
    try {
        const query = "SELECT * FROM order_items"
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error getting all order items");
        throw new Error("Error getting all order items");
    }
}

export async function getOrderItemById(id: number) {
    try {
        const query = "SELECT * FROM order_items WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error getting order item by id", error);
        throw new Error("Error getting order item by id");
    }
}

export async function updateOrderItem(id: number, orderItem: IOrderItem) {
    try {
        const query = "UPDATE order_items SET order_id=$1, product_id=$2, quantity=$3, price=$4 WHERE id=$5 RETURNING *"
        const values = [orderItem.order_id, orderItem.product_id, orderItem.quantity, orderItem.price, id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error updating order item", error);
        throw new Error("Error updating order item");
    }
}

export async function deleteOrderItem(id: number) {
    try {
        const query = "DELETE FROM order_items WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting order item", error);
        throw new Error("Error deleting order item");
    }
}
