import { pool } from "../config";
import { IProduct } from "../constants";

export async function createProduct(product:IProduct) {
    try {
        const query = "INSERT INTO products (name, description, merchant_id, price) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [product.name, product.description, product.merchant_id, product.price, ]

        const result = await pool.query(query, values);
        return result.rows[0];
        
    } catch (error) {
        console.error("Error creating product");
        throw new Error("Error creating product")
    }
}

export async function getAllProducts() {
    try {
        const query = "SELECT * FROM products";
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error getting all products");
        throw new Error("Error getting all products");
    }
}

export async function getProductById(id: number) {
    try {
        const query = "SELECT * FROM products WHERE id=$1";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error getting product by id");
        throw new Error("Error getting product by id");
    }
}

export async function updateProduct(id: number, product: IProduct) {
    try {
        const query = "UPDATE products SET name=$1, description=$2, merchant_id=$3, price=$4 WHERE id=$5 RETURNING *"
        const values = [product.name, product.description, product.merchant_id, product.price, id]

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error updating product");
        throw new Error("Error updating product");
    }
}

export async function deleteProduct(id: number) {
    try {
        const query = "DELETE FROM products WHERE id=$1 RETURNING *"
        const values = [id]

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting product");
        throw new Error("Error deleting product");
    }
}