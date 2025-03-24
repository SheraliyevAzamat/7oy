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
exports.createTags = createTags;
exports.getAllTags = getAllTags;
exports.getTagById = getTagById;
exports.updateTag = updateTag;
exports.deleteTag = deleteTag;
const config_1 = require("../config");
function createTags(tag) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO tags (name) VALUES ($1) RETURNING *";
            const values = [tag.name];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error creating tag", error);
            throw new Error("Error creating tag");
        }
    });
}
function getAllTags() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM tags";
            const result = yield config_1.pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.error("Error getting all tags");
            throw new Error("Error getting all tags");
        }
    });
}
function getTagById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM tags WHERE id=$1";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error getting tag by id", error);
            throw new Error("Error getting tag by id");
        }
    });
}
function updateTag(id, tag) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "UPDATE tags SET name=$1 WHERE id=$2 RETURNING *";
            const values = [tag.name, id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error updating tag", error);
            throw new Error("Error updating tag");
        }
    });
}
function deleteTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "DELETE FROM tags WHERE id=$1 RETURNING *";
            const values = [id];
            const result = yield config_1.pool.query(query, values);
            return result.rows[0];
        }
        catch (error) {
            console.error("Error deleting tag", error);
            throw new Error("Error deleting tag");
        }
    });
}
