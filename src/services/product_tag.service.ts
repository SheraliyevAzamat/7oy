import { pool } from "../config";
import { IProductTag } from "../constants";

export async function createProductTag(productTag: IProductTag) {
    try {
        const query = "INSERT INTO product_tags (tag_id,product_id) VALUES ($1, $2)RETURNING *"
        const values = [productTag.tag_id, productTag.product_id]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error creating product tag", error)
        throw new Error("Error creating product tag")

    }
}
export async function getALlProductag() {
    try {
        const query = "SELECT * FROM product_tags "
        const result = await pool.query(query)
        return result.rows

    } catch (error) {
        console.error("Error getting");

        throw new Error("Error getting")
    }
}
export async function getOneProductTag(id:number){
    try {
        const query = "SELECT * FROM product_tags WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error getting product tag by id", error)
        throw new Error("Error getting product tag by id")
    }
}
export async function updateProductTag(id:number, productTag: IProductTag){
    try {
        const query = "UPDATE product_tags SET tag_id=$1, product_id=$2 WHERE id=$3 RETURNING *"
        const values = [productTag.tag_id, productTag.product_id, id]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error updating product tag", error)
        throw new Error("Error updating product tag")
    }
}
export async function deleteProductTag(id:number){
    try {
        const query = "DELETE FROM product_tags WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error deleting product tag", error)
        throw new Error("Error deleting product tag")
    }
}