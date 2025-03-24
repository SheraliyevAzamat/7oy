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
exports.createCountry = createCountry;
exports.getAllCountry = getAllCountry;
exports.getOneCountry = getOneCountry;
exports.updateCountry = updateCountry;
exports.deleteCountry = deleteCountry;
const config_1 = require("../config");
function createCountry(country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO countries(name,continent) VALUES ($1,$2)RETURNING *";
            const values = [country.name, country.continent];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating country");
            throw new Error("Error creating country");
        }
    });
}
function getAllCountry() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM countries";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all country");
            throw new Error("Error getting all country");
        }
    });
}
function getOneCountry(countryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM countries WHERE id=$1";
            const values = [countryId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting one country");
            throw new Error("Error getting one country");
        }
    });
}
function updateCountry(countryId, country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE countries SET name=$1, continent=$2 WHERE id=$3 RETURNING *";
            const values = [country.name, country.continent, countryId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating country");
            throw new Error("Error updating country");
        }
    });
}
function deleteCountry(countryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM countries WHERE id=$1 RETURNING *";
            const values = [countryId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting country");
            throw new Error("Error deleting country");
        }
    });
}
