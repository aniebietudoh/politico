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
    // Test to POST new office record
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
    // Test to GET all office record
      it("should get all office record", (done) => {
        let officeData = {
          id: uuid.v4(),
          officeName: "Chairman",
          officeType: "Local government"
        }
             chai.request(app)
                 .get('/api/v1/offices')
                  .send(officeData)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

      //test to GET a specific office record
  /*    it("should get specific office record", (done) => {
        const officeData = {
          id: uuid.v4(),
          officeName: "Chairman",
          officeType: "Local government"
        }
             chai.request(app)
                 .get('/api/v1/offices/' + officeData.id)
                 .send(officeData)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         }); */
  });
});