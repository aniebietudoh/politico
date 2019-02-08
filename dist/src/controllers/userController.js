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
              if (!(!req.body.firstname || !req.body.email || !req.body.password)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'Details are missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'Please enter a valid email address' }));

            case 4:
              if (!(isNaN(req.body.phoneNumber) || req.body.phoneNumber.length < 8)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'Please enter a valid phone number' }));

            case 6:
              if (!(req.body.firstname || req.body.lastname || req.body.passportUrl || req.body.othername || req.body.email || req.body.password === " ")) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'No field should be empty' }));

            case 8:
              hashPassword = _helper2.default.trimString(_helper2.default.hashPassword(req.body.password));
              createQuery = 'INSERT INTO\n      users(id, firstname, lastname, othername, email, phoneNumber, passportUrl, isAdmin, password)\n      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\n      returning *';
              values = [(0, _v2.default)(), _helper2.default.trimString(req.body.firstname), _helper2.default.trimString(req.body.lastname), _helper2.default.trimString(req.body.othername), req.body.email, _helper2.default.makeInteger(req.body.phoneNumber), req.body.passportUrl, false, hashPassword];
              _context.prev = 11;
              _context.next = 14;
              return _query2.default.query(createQuery, values);

            case 14:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              token = _helper2.default.generateToken(rows[0].id);
              return _context.abrupt('return', res.status(201).send({
                status: 201,
                data: [{ "token": token, "user": rows[0] }] }));

            case 20:
              _context.prev = 20;
              _context.t0 = _context['catch'](11);

              if (!(_context.t0.routine === '_bt_check_unique')) {
                _context.next = 24;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'error': 'User with that EMAIL already exist' }));

            case 24:
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 25:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[11, 20]]);
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

              return _context2.abrupt('return', res.status(400).send({ status: 400, 'error': 'Name or email is missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ status: 400, 'error': 'Please enter a valid email address' }));

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

              return _context2.abrupt('return', res.status(400).send({ status: 400, 'error': 'The credentials you provided is incorrect' }));

            case 12:
              if (_helper2.default.comparePassword(rows[0].password, req.body.password)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ status: 400, 'error': 'The credentials you provided is incorrect' }));

            case 14:
              token = _helper2.default.generateToken(rows[0].id);
              return _context2.abrupt('return', res.status(200).header('x-auth-header', token).send({ status: 200, token: token }));

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