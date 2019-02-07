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

var Office = {
  createOffice: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var text, values, _ref2, rows;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!req.body.name || !req.body.type)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'Some details are missing' }));

            case 2:
              text = 'INSERT INTO\n      offices(id, name, type)\n      VALUES($1, $2, $3)\n      returning *';
              values = [(0, _v2.default)(), _helper2.default.trimString(req.body.name), _helper2.default.trimString(req.body.type)];
              _context.prev = 4;
              _context.next = 7;
              return _query2.default.query(text, values);

            case 7:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              return _context.abrupt('return', res.status(201).send({
                status: 201,
                data: [rows[0]]
              }));

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](4);
              return _context.abrupt('return', res.status(400).send({ status: 400, "error": "Bad Request" }));

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 12]]);
    }));

    function createOffice(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createOffice;
  }(),
  getAllOffice: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var findAllQuery, _ref4, rows, rowCount;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              findAllQuery = 'SELECT * FROM offices';
              _context2.prev = 1;
              _context2.next = 4;
              return _query2.default.query(findAllQuery);

            case 4:
              _ref4 = _context2.sent;
              rows = _ref4.rows;
              rowCount = _ref4.rowCount;
              return _context2.abrupt('return', res.status(200).send({
                status: 201,
                data: rows
              }));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](1);
              return _context2.abrupt('return', res.status(400).send({ status: 400, "error": "Cannot get office" }));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 10]]);
    }));

    function getAllOffice(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return getAllOffice;
  }(),
  getOneOffice: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var text, _ref6, rows;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              text = 'SELECT * FROM offices WHERE id = $1';
              _context3.prev = 1;
              _context3.next = 4;
              return _query2.default.query(text, [req.params.id]);

            case 4:
              _ref6 = _context3.sent;
              rows = _ref6.rows;

              if (rows[0]) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt('return', res.status(404).send({ status: 404, 'message': 'Office not found' }));

            case 8:
              return _context3.abrupt('return', res.status(200).send(rows[0]));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);
              return _context3.abrupt('return', res.status(400).send(_context3.t0));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 11]]);
    }));

    function getOneOffice(_x5, _x6) {
      return _ref5.apply(this, arguments);
    }

    return getOneOffice;
  }()
};

exports.default = Office;