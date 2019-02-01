'use strict';

var _partyModel = require('../src/models/partyModel');

var _partyModel2 = _interopRequireDefault(_partyModel);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure chai
_chai2.default.use(_chaiHttp2.default); // Import the dependencies for testing

_chai2.default.should();
describe("Party", function () {
    describe("GET /api/v1/parties", function () {
        // Test to get all party record
        it("should get all party record", function (done) {
            _chai2.default.request(_server2.default).get('/api/v1/parties').send({ 'partyName': 'PDP', 'partyAddress': 'Lagos', 'partyLogo': 'http://logo.com' }).end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
        // Test to get single party record
        /*   it("should get a single party record", (done) => {
           	let newParty = ({
           		id: uuid.v4(),
         			partyName: 'APC',
         			partyAddress: 'Lagos',
         			partyLogo: 'http://logo.com'
         		});
                chai.request(app)
                    .get('/api/v1/parties/'+newParty.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                     });
            });*/
    });
});