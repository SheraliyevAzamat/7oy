import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
export const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "node_lib",
    password: "azam4342",
    port: 5433
});

pool.connect().then((client) => { 
    console.log("Connected to PostgreSQL database");
    client.release();
})
    .catch((err) => {
        console.error('database connection error', err.stack);
    })