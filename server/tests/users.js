// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import uuidv4 from 'uuid/v4';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Users', () => {
  describe('GET /api/v1/users', () => {
    // Test to get all party record
    it('Should register a new user', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .send({
          id: uuidv4(),
          firstname: "ani",
          lastname: "robert",
          othername: "udoh",
          email: "animan@gmail.com",
          phoneNumber: "0902112122",
          passportUrl: "http://hello.com",
          isAdmin:false,
          password: "hashPassword"
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});

