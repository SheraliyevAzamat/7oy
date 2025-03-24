import { pool } from "../config";
import { ICreateUserDTO, IUpdateUserDTO, IUser } from "../constants";

export async function createUser(user: ICreateUserDTO) {
    try {
        const query = ("INSERT INTO users (name, email, password, country_id) VALUES ($1, $2, $3, $4 )RETURNING *")
        const values = [user.name, user.email, user.password,  user.country_id]

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error creating user", error);
        throw new Error("error creating user");
    }

}
export async function getAllUsers() {
    try {
        const query = "SELECT * FROM users"
        const result = await pool.query(query);
        return result.rows;

    } catch (error) {
        console.error("error getting all users", error);
        throw new Error("error getting all users");
    }
}

export async function getOneUser(userId: string) {
    try {
        const query = "SELECT * FROM users WHERE id = $1"
        const values = [userId]
        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error getting one user", error);
        throw new Error("error getting one user");
    }
}
export async function updateUser(userId: number, dto: IUpdateUserDTO) {
    try {
        const query = "UPDATE users SET name=$1, email=$2, password=$3, country_id=$4 WHERE id=$5 RETURNING *"
        const values = [dto.name, dto.email, dto.password, dto.country_id, userId]

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error updating user", error);
        throw new Error("error updating user");
    }
}

export async function deleteUser(userId: number) {
    try {
        const query = "DELETE FROM users WHERE id=$1 RETURNING *"
        const values = [userId]

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error deleting user", error);
        throw new Error("error deleting user");
    }
}