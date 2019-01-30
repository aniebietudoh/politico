// Import the dependencies for testing
import PartyModel from '../src/models/partyModel';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import uuid from 'uuid';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Party", () => {
    describe("GET /api/v1/parties", () => {
        // Test to get all party record
        it("should get all party record", (done) => {
             chai.request(app)
                 .get('/api/v1/parties')
                 .send({'partyName': 'PDP', 'partyAddress': 'Lagos', 'partyLogo': 'http://logo.com'})
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });
        // Test to get single party record
        it("should get a single party record", (done) => {
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
         });

        // Test to not get single party record
        it("should not get a single party record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});