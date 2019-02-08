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

var Party = {
  createParty: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var text, values, _ref2, rows;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!req.body.name || !req.body.address || !req.body.logo)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'All fields are required' }));

            case 2:
              if (!(!isNaN(req.body.name) || req.body.name.length < 1)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ status: 400, 'Error': 'Please enter valid details' }));

            case 4:
              text = 'INSERT INTO\n      parties(id, name, address, logo)\n      VALUES($1, $2, $3, $4)\n      returning *';
              values = [(0, _v2.default)(), _helper2.default.trimString(req.body.name), _helper2.default.trimString(req.body.hqAddress), _helper2.default.trimString(req.body.logoUrl)];
              _context.prev = 6;
              _context.next = 9;
              return _query2.default.query(text, values);

            case 9:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              return _context.abrupt('return', res.status(201).send({
                status: 201,
                data: [rows[0]]
              }));

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](6);
              return _context.abrupt('return', res.status(400).send({ status: 400, error: "Bad Request, Cannot create Party" }));

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 14]]);
    }));

    function createParty(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createParty;
  }(),
  getAllParty: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var findAllQuery, _ref4, rows, rowCount;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              findAllQuery = 'SELECT * FROM parties';
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
              return _context2.abrupt('return', res.status(400).send({ status: 400, error: "Bad Request, cannot get parties" }));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 10]]);
    }));

    function getAllParty(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return getAllParty;
  }(),
  getOneParty: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var text, _ref6, rows;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              text = 'SELECT * FROM parties WHERE id = $1';
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

              return _context3.abrupt('return', res.status(404).send({ status: 404, 'error': 'Party not found' }));

            case 8:
              return _context3.abrupt('return', res.status(200).send({
                status: 200,
                data: [rows[0]]
              }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);
              return _context3.abrupt('return', res.status(400).send({ status: 400, "error": _context3.t0 }));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 11]]);
    }));

    function getOneParty(_x5, _x6) {
      return _ref5.apply(this, arguments);
    }

    return getOneParty;
  }(),
  updateParty: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var findOneQuery, updateOneQuery, _ref8, rows, values, response;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              findOneQuery = 'SELECT * FROM parties WHERE id=$1';
              updateOneQuery = 'UPDATE parties\n      SET name=$1,address=$2,logo=$3 returning *';
              _context4.prev = 2;
              _context4.next = 5;
              return _query2.default.query(findOneQuery, [req.params.id]);

            case 5:
              _ref8 = _context4.sent;
              rows = _ref8.rows;

              if (rows[0]) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt('return', res.status(404).send({ status: 404, 'message': 'Party not found' }));

            case 9:
              values = [req.body.name || rows[0].name, req.body.address || rows[0].address, req.body.logo || rows[0].logo, req.params.id];
              _context4.next = 12;
              return _query2.default.query(updateOneQuery, values);

            case 12:
              response = _context4.sent;
              return _context4.abrupt('return', res.status(200).send(response.rows[0]));

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4['catch'](2);
              return _context4.abrupt('return', res.status(400).send(_context4.t0));

            case 19:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[2, 16]]);
    }));

    function updateParty(_x7, _x8) {
      return _ref7.apply(this, arguments);
    }

    return updateParty;
  }(),
  deleteParty: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var deleteQuery, _ref10, rows;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              deleteQuery = 'DELETE FROM parties WHERE id=$1 returning *';
              _context5.prev = 1;
              _context5.next = 4;
              return _query2.default.query(deleteQuery, [req.params.id]);

            case 4:
              _ref10 = _context5.sent;
              rows = _ref10.rows;

              if (rows[0]) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt('return', res.status(404).send({ status: 404, 'error': 'Party not found' }));

            case 8:
              return _context5.abrupt('return', res.status(204).send({
                status: 204,
                "message": "Deleted"
              }));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](1);
              return _context5.abrupt('return', res.status(400).send(_context5.t0));

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[1, 11]]);
    }));

    function deleteParty(_x9, _x10) {
      return _ref9.apply(this, arguments);
    }

    return deleteParty;
  }()
};

exports.default = Party;