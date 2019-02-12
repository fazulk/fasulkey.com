'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = [_user2.default];

exports.default = (0, _mergeGraphqlSchemas.mergeTypes)(typeDefs, { all: true });
//# sourceMappingURL=index.js.map