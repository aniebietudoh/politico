// Import the dependencies for testing
import PartyModel from '../src/models/partyModel';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import uuid from 'uuid';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Office", () => {
  describe("POST /api/v1/offices", () => {
    // Test to post new office record
    it("should post new record", (done) => {
       chai.request(app)
          .post('/api/v1/offices')
          .send({
            id: uuid.v4(),
            officeName: "Chairman",
            officeType: "Local government"
          })
         .end((err, res) => {
           res.should.have.status(201);
           res.body.should.be.a('object');
           done();
          });
     });

  });
});