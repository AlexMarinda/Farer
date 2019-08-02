import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';




// Configure chai
chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-unused-vars
const { expect, assert } = chai;

describe('trips', () => {
 

  describe('GET /', () => {
    it('should return all trips listed', done => {
      chai
        .request(app)
        .get('/api/v1/trips')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('data');
          done();
        });
    });

    it('should return a specific trips listed', done => {
      chai
        .request(app)
        .get('/api/v1/trips/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('data').be.a('object');
          done();
        });
    });

    it('should return 404 when  specified trip is not found!', done => {
      chai
        .request(app)
        .get('/api/v1/trips/5')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error').be.a('string');
          res.body.should.have.property('error').eql('No trip found');
          done();
        });
    });

   
  });


  describe('POST /', () => {
    it('it should return 201 and newly created trip object', done => {
 
      chai
        .request(app)
        .post('/api/v1/trips')
        .set('Authorization', `Bearer ${token}`)
        
            .send(newTrip)
         
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have
            .property('data')

          res.body.should.have
            .property('data')
            .have.property('address')
            .eql('KK 1 st');
        });
      done();
    });

    it('should return  trip by origin', done => {
        chai
          .request(app)
          .get('/api/v1/trips?origin=kigali')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('data').be.a('array');
            done();
          });
      });
      it('should return 404 if no available trips of such origin', done => {
        chai
          .request(app)
          .get('/api/v2/trips?origin=kigali')
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.have
              .property('error')
              .be.a('string')
              .eql('your filter direction not found');
            done();
          });
      });
  
      it('should return  trip by destination', done => {
          chai
            .request(app)
            .get('/api/v1/trips?destination=rwamagana')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property('data').be.a('array');
              done();
            });
        });
        it('should return 404 if no available trips of such destination', done => {
          chai
            .request(app)
            .get('/api/v1/trips?destination=rwamagana')
            .end((err, res) => {
              res.should.have.status(404);
              res.body.should.have
                .property('error')
                .be.a('string')
                .eql('your filter direction not found');
              done();
            });
        });
  });

  describe('Middlewares', () => {
    it('it should return valids response depending input given', done => {
    
      const req = httpMocks.createRequest();
      const res = httpMocks.createResponse();
      const schema = Joi.object().keys({
        seating_capacity: Joi.number()
        .min(0)
        .required(),
      bus_license_number: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
      origin: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
      destination: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
      trip_date: Joi.string()
        .trim()
        .required(),
      fare: Joi.number()
        
        .min(2)
        .required(),
      status: Joi.string()
       
        .min(2)
        .max(50),

      });
      checkValidator(req, res, schema, next);
      // eslint-disable-next-line no-unused-expressions
      expect(next.calledOnce).to.be.true;
      genericValidator(req, res, schema, () => {
        expect(res).to.have.property('status');
      });
      done();
    });
  });
  describe('CANCEL /', () => {
    it('it should return 403 when try to delete trips which not found', done => {
      chai
        .request(app)
        .patch('/api/v1/trips/1/cancel')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.have
            .property('error')
            .have.property('message')
            .eql('trip not found!');
          done();
        });
    });

    it('it should return 200 status when cancel operation was successful', done => {
      chai
        .request(app)
        .patch('/api/v1/trips/1')
        .set('Authorization', `Bearer ${sdfbdbfjwer.ffffwcfgw.wewfvww}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status').eql(200);
          res.body.should.have.property('message').be.a('string');
          res.body.should.have.property('message').eql('Trip cancelled successfully');
          done();
        });
    });


  });
});

