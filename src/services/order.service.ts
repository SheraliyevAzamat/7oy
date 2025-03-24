
import { pool } from "../config";
import { IOrder } from "../constants";

export async function createOrder(order:IOrder) {
    try {
        const query = "INSERT INTO orders (user_id, status, total) VALUES ($1, $2, $3) RETURNING *"
        const values = [order.user_id, order.status, order.total]
        
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error creating order");
        throw new Error("Error creating order");
    }
}

export async function getAllOrders() {
    try {
        const query = "SELECT * FROM orders"
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error getting all orders");
        throw new Error("Error getting all orders");
    }
}

export async function getOrderById(id: number) {
    try {
        const query = "SELECT * FROM orders WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error getting order by id", error);
        throw new Error("Error getting order by id");
    }
}

export async function updateOrder(id: number, order: IOrder) {
    try {
        const query = "UPDATE orders SET user_id=$1, status=$2, total=$3 WHERE id=$4 RETURNING *"
        const values = [order.user_id, order.status, order.total, id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error updating order", error);
        throw new Error("Error updating order");
    }
}

export async function deleteOrder(id: number) {
    try {
        const query = "DELETE FROM orders WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting order", error);
        throw new Error("Error deleting order");
    }
}
