"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const register = (req, res) => {
    try {
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'server error' });
    }
};
exports.register = register;
const login = (req, res) => {
    try {
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'server error' });
    }
};
exports.login = login;
