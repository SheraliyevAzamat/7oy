import { pool } from "../config";

import { ICreateCountryDTO } from "../constants";

export async function createCountry(country: ICreateCountryDTO){
    try {
        const query = "INSERT INTO countries(name,continent) VALUES ($1,$2)RETURNING *";
        const values = [country.name, country.continent]
        
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error creating country");
        throw new Error("Error creating country");
    }
    
}

export async function getAllCountry() {
 try {
    const query = "SELECT * FROM countries";
    const result = await pool.query(query);
    return result.rows;
 } catch (error) {
    console.error("Error getting all country");
    throw new Error("Error getting all country");
    
 }
}

export async function getOneCountry(countryId: number) {
    try {
        const query = "SELECT * FROM countries WHERE id=$1";
        const values = [countryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error getting one country");
        throw new Error("Error getting one country");
    }
}

export async function updateCountry(countryId: number, country: ICreateCountryDTO) {
    try {
        const query = "UPDATE countries SET name=$1, continent=$2 WHERE id=$3 RETURNING *";
        const values = [country.name, country.continent, countryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error updating country");
        throw new Error("Error updating country");
    }
}

export async function deleteCountry(countryId: number) {
    try {
        const query = "DELETE FROM countries WHERE id=$1 RETURNING *";
        const values = [countryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting country");
        throw new Error("Error deleting country");
    }
}