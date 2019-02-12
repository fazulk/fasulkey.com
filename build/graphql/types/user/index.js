"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type User {\n    id: String!\n    name: String!\n    email: String!\n  }\n  type Query {\n    user(id: String!): User\n    users: [User]\n    user_name(name: String!): User\n  }\n  type Mutation {\n    addUser(id: String!, name: String!, email: String): User\n    editUser(id: String, name: String, email: String): User\n    deleteUser(id: String, name: String, email: String): User\n  }\n";
//# sourceMappingURL=index.js.map