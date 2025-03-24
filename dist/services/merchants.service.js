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
exports.createMerchant = createMerchant;
exports.getAllMerchants = getAllMerchants;
exports.getMerchantById = getMerchantById;
exports.updateMerchant = updateMerchant;
exports.deleteMerchant = deleteMerchant;
const config_1 = require("../config");
function createMerchant(merchant) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO merchants (name,country_id, admin_id) VALUES ($1, $2, $3)RETURNING *";
            const values = [merchant.name, merchant.country_id, merchant.admin_id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating merchant", error);
            throw new Error("Error creating merchant");
        }
    });
}
function getAllMerchants() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM merchants";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all merchants", error);
            throw new Error("Error getting all merchants");
        }
    });
}
function getMerchantById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM merchants WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting merchant by id", error);
            throw new Error("Error getting merchant by id");
        }
    });
}
function updateMerchant(id, updatedMerchant) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE merchants SET name=$1, country_id=$2, updated_at=$3 WHERE id=$4 RETURNING *";
            const values = [updatedMerchant.name, updatedMerchant.country_id, new Date(), id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating merchant", error);
            throw new Error("Error updating merchant");
        }
    });
}
function deleteMerchant(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM merchants WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting merchant", error);
            throw new Error("Error deleting merchant");
        }
    });
}
