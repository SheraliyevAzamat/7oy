
import { pool } from "../config";
import { IMercant } from "../constants";

export async function createMerchant(merchant:IMercant){
    try{
        const query = "INSERT INTO merchants (name,country_id, admin_id) VALUES ($1, $2, $3)RETURNING *"
        const values = [merchant.name, merchant.country_id, merchant.admin_id]
        const result = await pool.query(query, values)
        return result.rows[0]
    }catch (error) {
        console.error("Error creating merchant", error);
        throw new Error("Error creating merchant");
    }
}

export async function getAllMerchants(){
    try{
        const query = "SELECT * FROM merchants"
        const result = await pool.query(query)
        return result.rows
    }catch (error) {
        console.error("Error getting all merchants", error);
        throw new Error("Error getting all merchants");
    }
}

export async function getMerchantById(id: number){
    try{
        const query = "SELECT * FROM merchants WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    }catch (error) {
        console.error("Error getting merchant by id", error);
        throw new Error("Error getting merchant by id");
    }
}

export async function updateMerchant(id: number, updatedMerchant: Partial<IMercant>){
    try{
        const query = "UPDATE merchants SET name=$1, country_id=$2, updated_at=$3 WHERE id=$4 RETURNING *"
        const values = [updatedMerchant.name, updatedMerchant.country_id, new Date(), id]
        const result = await pool.query(query, values)
        return result.rows[0]
    }catch (error) {
        console.error("Error updating merchant", error);
        throw new Error("Error updating merchant");
    }
}

export async function deleteMerchant(id: number){
    try{
        const query = "DELETE FROM merchants WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    }catch (error) {
        console.error("Error deleting merchant", error);
        throw new Error("Error deleting merchant");
    }
}
