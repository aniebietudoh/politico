'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Auth = require('../middleware/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
	app.post('/auth/signup', _userController2.default.create);
	app.post('/auth/login', _userController2.default.login);
};