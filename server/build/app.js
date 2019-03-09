'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('@babel/polyfill');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();


var MONGO_CONNECTION = process.env.DB_CONNECTION;

var app = (0, _express2.default)();
var URL = 'http://localhost';
var PORT = 3001;

// Connect to MongoDB with Mongoose.
_mongoose2.default.connect(MONGO_CONNECTION, {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(function () {
    return console.log('MongoDB connected');
}).catch(function (err) {
    return console.log(err);
});

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));
app.use((0, _cors2.default)());

app.use('/graphql', (0, _cors2.default)(), _bodyParser2.default.json(), (0, _expressGraphql2.default)({
    schema: _graphql2.default,
    graphiql: true
}));

app.listen(PORT, function () {
    console.log('Listening on ' + URL + ':' + PORT);
});

exports.default = app;
//# sourceMappingURL=app.js.map