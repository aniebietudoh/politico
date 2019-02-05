// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import uuid from 'uuid';
import app from '../server';
import PartyModel from '../src/models/partyModel';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Party', () => {
  describe('GET /api/v1/parties', () => {
    // Test to get all party record
    it('should get all party record', (done) => {
      chai.request(app)
        .get('/api/v1/parties')
        .send({
          partyName: 'PDP',
          partyAddress: 'Lagos',
          partyLogo: 'http://logo.com',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    // Test to POST new party record
    it('should post new party record', (done) => {
      chai.request(app)
        .post('/api/v1/parties')
        .send({
          partyName: 'PDP',
          partyAddress: 'Lagos',
          partyLogo: 'http://logo.com',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
