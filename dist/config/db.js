"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { Pool } = pg_1.default;
exports.pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "node_lib",
    password: "azam4342",
    port: 5433
});
exports.pool.connect().then((client) => {
    console.log("Connected to PostgreSQL database");
    client.release();
})
    .catch((err) => {
    console.error('database connection error', err.stack);
});
