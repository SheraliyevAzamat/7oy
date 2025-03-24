"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUp = void 0;
const config_1 = require("../config/");
//set up all tables
const setUp = () => __awaiter(void 0, void 0, void 0, function* () {
    const createType = `CREATE TYPE product_status AS ENUM (
    'out_of_stock',
    'in_stock',
    'running_low'
  )`;
    const createTablecountryesQuery = ` CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    continent VARCHAR(50) NOT NULL
)`;
    const createTableUsersQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    country_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE SET NULL
)`;
    const createTableMerchantsQuery = `CREATE TABLE IF NOT EXISTS merchants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country_id INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    admin_id INTEGER NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE SET NULL
)`;
    const createTableProductsQuery = `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    merchant_id INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    status product_status DEFAULT 'in_stock',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (merchant_id) REFERENCES ecommerce.merchants (id) ON DELETE CASCADE
)`;
    const createTableTagsQuery = `CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
)`;
    const createTableProductTagsQuery = `CREATE TABLE IF NOT EXISTS product_tags (
    tag_id INTEGER,
    product_id INTEGER,
    PRIMARY KEY (tag_id, product_id),
    FOREIGN KEY (tag_id) REFERENCES ecommerce.tags (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES ecommerce.products (id) ON DELETE CASCADE
)`;
    const createTableOrdersQuery = `CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    total DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
)`;
    const createTableOrderItemsQuery = `CREATE TABLE IF NOT EXISTS order_items (
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES ecommerce.orders (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES ecommerce.products (id)
)`;
    const createTableMerchantActivityquery = `CREATE TABLE IF NOT EXISTS merchant_activity (
    id SERIAL PRIMARY KEY,
    merchant_id INTEGER,
    country_id INTEGER,
    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ,
    FOREIGN KEY (merchant_id) REFERENCES ecommerce.merchants (id) ON DELETE CASCADE,
    FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE SET NULL
)`;
    try {
        //use async/await to run queries in sequence
        yield Promise.all([
            config_1.pool.query(createTableProductsQuery),
            config_1.pool.query(createTableTagsQuery),
            config_1.pool.query(createTablecountryesQuery),
            config_1.pool.query(createTableUsersQuery),
            config_1.pool.query(createTableMerchantsQuery),
            config_1.pool.query(createTableProductTagsQuery),
            config_1.pool.query(createTableOrdersQuery),
            config_1.pool.query(createTableOrderItemsQuery),
            config_1.pool.query(createTableMerchantActivityquery),
            config_1.pool.query(createType),
        ]);
        return "All tables created successfully!";
    }
    catch (error) {
        console.error("error creating tables", error);
        throw new Error("error creating tables");
    }
});
exports.setUp = setUp;
