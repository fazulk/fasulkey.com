'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // The User schema.


exports.default = {
    Query: {
        user: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref, context, info) {
                var id = _ref.id;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _users2.default.findOne({ id: id });

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            function user(_x, _x2, _x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return user;
        }(),
        user_name: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref3, context, info) {
                var name = _ref3.name;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _users2.default.findOne({ name: name });

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            function user_name(_x5, _x6, _x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return user_name;
        }(),
        users: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _users2.default.find({});

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            function users() {
                return _ref5.apply(this, arguments);
            }

            return users;
        }()
    },
    Mutation: {
        addUser: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, _ref6) {
                var id = _ref6.id,
                    name = _ref6.name,
                    email = _ref6.email;
                var newUser;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                newUser = new _users2.default({ id: id, name: name, email: email });
                                _context4.next = 3;
                                return newUser.save();

                            case 3:
                                return _context4.abrupt('return', _context4.sent);

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined);
            }));

            function addUser(_x9, _x10) {
                return _ref7.apply(this, arguments);
            }

            return addUser;
        }(),
        editUser: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, _ref8) {
                var id = _ref8.id,
                    name = _ref8.name,
                    email = _ref8.email;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _users2.default.findOneAndUpdate({ id: id }, { $set: { name: name, email: email } });

                            case 2:
                                return _context5.abrupt('return', _context5.sent);

                            case 3:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined);
            }));

            function editUser(_x11, _x12) {
                return _ref9.apply(this, arguments);
            }

            return editUser;
        }(),
        deleteUser: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(root, args) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _users2.default.findOneAndRemove(args);

                            case 2:
                                return _context6.abrupt('return', _context6.sent);

                            case 3:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined);
            }));

            function deleteUser(_x13, _x14) {
                return _ref10.apply(this, arguments);
            }

            return deleteUser;
        }()
    }
};
//# sourceMappingURL=index.js.map