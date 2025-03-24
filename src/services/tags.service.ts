
import { pool } from "../config";
import { ITag } from "../constants";

export async function createTags(tag: ITag) {
    try {
        const query = "INSERT INTO tags (name) VALUES ($1) RETURNING *"
        const values = [tag.name]
        const result = await pool.query(query, values)
        return result.rows[0]

    } catch (error) {
        console.error("Error creating tag", error);
        throw new Error("Error creating tag");
    }
}
export async function getAllTags() {
    try {
        const query = "SELECT * FROM tags"
        const result = await pool.query(query)
        return result.rows;
    } catch (error) {
        console.error("Error getting all tags");
        throw new Error("Error getting all tags");
    }
}

export async function getTagById(id: number) {
    try {
        const query = "SELECT * FROM tags WHERE id=$1"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error getting tag by id", error);
        throw new Error("Error getting tag by id");
    }
}

export async function updateTag(id: number, tag: ITag) {
    try {
        const query = "UPDATE tags SET name=$1 WHERE id=$2 RETURNING *"
        const values = [tag.name, id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error updating tag", error);
        throw new Error("Error updating tag");
    }
}

export async function deleteTag(id: number) {
    try {
        const query = "DELETE FROM tags WHERE id=$1 RETURNING *"
        const values = [id]
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error deleting tag", error);
        throw new Error("Error deleting tag");
    }
}
