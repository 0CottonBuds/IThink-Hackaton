"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findUserByEmail = void 0;
const users = [];
function findUserByEmail(email) {
    return users.find((user) => user.email === email);
}
exports.findUserByEmail = findUserByEmail;
function createUser(user) {
    users.push(user);
    return user;
}
exports.createUser = createUser;
