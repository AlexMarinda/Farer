import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';



chai.use(chaiHttp);

chai.should();

describe('ALL TRIPS /', () => {
  it('it should display all trips', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
        done();
      });
  });


  it('it should create trips', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)
      .send({
        seating_capacity: '50',
        origin: 'kigali',
        bus_license_number: 'RAC7303',
        destination: 'muhanga',
        trip_date: '1/2/2019',
        fare: '5000',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('it should create trips', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)
      .send({
        seating_capacity: '50',
        origin: 'kigali',
        bus_license_number: 'RAC7303',
        destination: 'muhanga',
        trip_date: '1/2/2019',

      })
      .end((err, res) => {
        res.should.have.status(400);

        done();
      });
  });


  it('it should get specific trip ', (done) => {
    chai.request(app)
      .get('/api/v1/trips/1')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data').be.a('object');
        done();
      });
  });


  it('it should get specific trip ', (done) => {
    chai.request(app)
      .get('/api/v1/trips/500')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });


  it('it should cancel trip ', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/1/cancel/')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });

  it('it should cancel trip ', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/100/cancel/')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(403);

        done();
      });
  });

  it('it should active trip ', (done) => {
    chai.request(app).patch('/api/v1/trips/2/active/')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });


  it('it should active trip ', (done) => {
    chai.request(app).patch('/api/v1/trips/100/active/')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo'}`)

      .end((err, res) => {
        res.should.have.status(403);

        done();
      });
  });
});


/* it('it should get specific trip ', done => {
        chai.request(app).get('/api/v1/trips/1').end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status').eql(201);
          res.body.should.have.property('data').be.a('object');
          done()
        })
    });

    it('it should post a trip ', done => {
      chai.request(app)
      .post('/api/v1/trips/1')
      .send({
          origin: "kigali",
      })
      .set()
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('data').be.a('object');
        done()
      })
  }); */


/* describe('POST/', () => {
    it('it should book a seat', done => {
        chai.request(app).post('/api/v1/bookings').end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('status').eql(201);
          res.body.should.have.property('data').be.a('array');
          done()
        })
    });


  })

   describe('DELETE/', () => {
 it('it should cancel booking ', done => {
        chai.request(app).delete('/api/v1/bookings/1/delete/').end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status').eql(200);

          done()
        })
    });

  })


}) */
