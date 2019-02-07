'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _query = require('../models/query');

var _query2 = _interopRequireDefault(_query);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var User = {
  create: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var hashPassword, createQuery, values, _ref2, rows, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!req.body.email || !req.body.password)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ 'message': 'Some values are missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ 'message': 'Please enter a valid email address' }));

            case 4:
              hashPassword = _helper2.default.hashPassword(req.body.password);
              createQuery = 'INSERT INTO\n      users(id, firstname, lastname, othername, email, phoneNumber, passportUrl, isAdmin, password)\n      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\n      returning *';
              values = [(0, _v2.default)(), req.body.firstname, req.body.lastname, req.body.othername, req.body.email, req.body.phoneNumber, req.body.passportUrl, false, hashPassword];
              _context.prev = 7;
              _context.next = 10;
              return _query2.default.query(createQuery, values);

            case 10:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              token = _helper2.default.generateToken(rows[0].id);
              return _context.abrupt('return', res.status(201).header('x-auth-header', token).send({
                status: 200, data: [{ "token": token, "user": rows[0] }] }));

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](7);

              if (!(_context.t0.routine === '_bt_check_unique')) {
                _context.next = 20;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ 'message': 'User with that EMAIL already exist' }));

            case 20:
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 16]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  login: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var text, _ref4, rows, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!req.body.email || !req.body.password)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ 'message': 'Some values are missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ 'message': 'Please enter a valid email address' }));

            case 4:
              text = 'SELECT * FROM users WHERE email = $1';
              _context2.prev = 5;
              _context2.next = 8;
              return _query2.default.query(text, [req.body.email]);

            case 8:
              _ref4 = _context2.sent;
              rows = _ref4.rows;

              if (rows[0]) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ 'message': 'The credentials you provided is incorrect' }));

            case 12:
              if (_helper2.default.comparePassword(rows[0].password, req.body.password)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ 'message': 'The credentials you provided is incorrect' }));

            case 14:
              token = _helper2.default.generateToken(rows[0].id);
              return _context2.abrupt('return', res.status(200).header('x-auth-header', token).send({ token: token }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](5);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[5, 18]]);
    }));

    function login(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return login;
  }()
};

exports.default = User;