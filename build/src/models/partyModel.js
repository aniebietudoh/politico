'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Party = function () {
  function Party() {
    _classCallCheck(this, Party);

    this.parties = [];
  }

  _createClass(Party, [{
    key: 'create',
    value: function create(data) {
      var newParty = {
        id: _uuid2.default.v4(),
        partyName: data.partyName || '',
        partyAddress: data.partyAddress || '',
        partyLogo: data.partyLogo || ''
      };
      this.parties.push(newParty);
      return newParty;
    }
  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.parties.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'findAll',
    value: function findAll() {
      return this.parties;
    }
  }, {
    key: 'update',
    value: function update(id, data) {
      var party = this.findOne(id);
      var index = this.parties.indexOf(party);
      this.parties[index].partyName = data.partyName || party.partyName;
      this.parties[index].partyAddress = data.partyAddress || party.partyAddress;
      this.parties[index].partyLogo = data.partyLogo || party.partyLogo;
      return this.parties[index];
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var party = this.findOne(id);
      var index = this.parties.indexOf(party);
      this.parties.splice(index, 1);
      return {};
    }
  }]);

  return Party;
}();

exports.default = new Party();