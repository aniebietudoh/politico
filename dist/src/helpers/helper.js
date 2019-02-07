'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helper = {
  hashPassword: function hashPassword(password) {
    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8));
  },
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcrypt2.default.compareSync(password, hashPassword);
  },
  isValidEmail: function isValidEmail(email) {
    return (/\S+@\S+\.\S+/.test(email)
    );
  },
  trimString: function trimString(string) {
    return string.replace(/\s+/g, '');
  },
  makeInteger: function makeInteger(arg) {
    if (parseInt(arg) !== NaN) {
      return arg;
    }
    return false;
  },
  generateToken: function generateToken(id, isAdmin) {
    var token = _jsonwebtoken2.default.sign({
      userId: id,
      role: isAdmin
    }, process.env.SECRET, { expiresIn: '1d' });
    return token;
  }
};

exports.default = Helper;