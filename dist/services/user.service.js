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
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getOneUser = getOneUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const config_1 = require("../config");
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = ("INSERT INTO users (name,email,password,country_id) VALUES ($1 $2 $3 $4 )RETURNING *");
            const values = [user.name, user.email, user.password, , user.country_id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("error creating user", error);
            throw new Error("error creating user");
        }
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM users";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("error getting all users", error);
            throw new Error("error getting all users");
        }
    });
}
function getOneUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM users WHERE id = $1";
            const values = [userId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("error getting one user", error);
            throw new Error("error getting one user");
        }
    });
}
function updateUser(userId, dto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE users SET name=$1, email=$2, password=$3, country_id=$4 WHERE id=$5 RETURNING *";
            const values = [dto.name, dto.email, dto.password, dto.country_id, userId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("error updating user", error);
            throw new Error("error updating user");
        }
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM users WHERE id=$1 RETURNING *";
            const values = [userId];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("error deleting user", error);
            throw new Error("error deleting user");
        }
    });
}
