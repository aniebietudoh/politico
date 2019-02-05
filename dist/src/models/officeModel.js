'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Office = function () {
  function Office() {
    _classCallCheck(this, Office);

    this.offices = [];
  }

  _createClass(Office, [{
    key: 'create',
    value: function create(data) {
      var newOffice = {
        id: _uuid2.default.v4(),
        officeName: data.officeName || '',
        officeType: data.officeType || ''
      };
      this.offices.push(newOffice);
      return newOffice;
    }
  }, {
    key: 'findAll',
    value: function findAll() {
      return this.offices;
    }
  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.offices.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return Office;
}();

exports.default = new Office();