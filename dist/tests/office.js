/*// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import uuid from 'uuid';
import app from '../server';
//import PartyModel from '../src/objectsAPI/models/partyModel';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Office', () => {
  describe('POST /api/v1/offices', () => {
    // Test to POST new office record
    it('should post new record', (done) => {
      chai.request(app)
        .post('/api/v1/offices')
        .send({
          id: uuid.v4(),
          officeName: 'Chairman',
          officeType: 'Local government',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
    // Test to GET all office record
    it('should get all office record', (done) => {
      const officeData = {
        id: uuid.v4(),
        officeName: 'Chairman',
        officeType: 'Local government',
      };
      chai.request(app)
        .get('/api/v1/offices')
        .send(officeData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
*/
"use strict";