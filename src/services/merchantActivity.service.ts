import { pool } from "../config";
import { IMerchantActivity } from "../constants";

export async function createMerchantActivity(merchantAct:IMerchantActivity) {
    try {
        const query = "INSERT INTO merchant_activities (merchant_id, activity) VALUES ($1, $2) RETURNING *"
        const values = [merchantAct.merchant_id, merchantAct.activity]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error creating merchant activity", error)
    }
}

export async function getAllMerchantActivities() {
    try {
        const query = "SELECT * FROM merchant_activities"
        const result = await pool.query(query)
        return result.rows
    } catch (error) {
        console.error("Error getting all merchant activities", error)
    }
}

export async function getMerchantActivityById(id: number) {
    try {
        const query = "SELECT * FROM merchant_activities WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error getting merchant activity by id", error)
    }
}

export async function updateMerchantActivity(id: number, merchantAct: IMerchantActivity) {
    try {
        const query = "UPDATE merchant_activities SET merchant_id=$1, activity=$2 WHERE id=$3 RETURNING *"
        const values = [merchantAct.merchant_id, merchantAct.activity, id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error updating merchant activity", error)
    }
}

export async function deleteMerchantActivity(id: number) {
    try {
        const query = "DELETE FROM merchant_activities WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error deleting merchant activity", error)
    }
}