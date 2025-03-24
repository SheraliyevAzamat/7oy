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
exports.createMerchantActivity = createMerchantActivity;
exports.getAllMerchantActivities = getAllMerchantActivities;
exports.getMerchantActivityById = getMerchantActivityById;
exports.updateMerchantActivity = updateMerchantActivity;
exports.deleteMerchantActivity = deleteMerchantActivity;
const config_1 = require("../config");
function createMerchantActivity(merchantAct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO merchant_activities (merchant_id, activity) VALUES ($1, $2) RETURNING *";
            const values = [merchantAct.merchant_id, merchantAct.activity];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating merchant activity", error);
        }
    });
}
function getAllMerchantActivities() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM merchant_activities";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all merchant activities", error);
        }
    });
}
function getMerchantActivityById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM merchant_activities WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting merchant activity by id", error);
        }
    });
}
function updateMerchantActivity(id, merchantAct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE merchant_activities SET merchant_id=$1, activity=$2 WHERE id=$3 RETURNING *";
            const values = [merchantAct.merchant_id, merchantAct.activity, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating merchant activity", error);
        }
    });
}
function deleteMerchantActivity(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM merchant_activities WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting merchant activity", error);
        }
    });
}
