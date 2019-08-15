import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { initDB } from '../way_fareDB/dbInit';


chai.use(chaiHttp);

chai.should()

describe('ALL booking /', () => {

  it('it should display all bookings', done => {
    chai
      .request(app)
      .get('/api/v1/bookings')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1hbGFsZXg0NEBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiYWxleCIsImxhc3RfbmFtZSI6Im1hcmluZGEiLCJwYXNzd29yZCI6IiQyYiQxMCQvWTB5LzkwNXBjUnNVejdKMU9lNjguS2Y0OFFSWHJsUTY4eGhjT1p6eXBMaWtIdGUyQldWeSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NjU4MTEyMDB9.ardfycpDYYyGlGmlAFqkcVVr-AfQQx2qvIqxz_74h7w"}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });


   
        it('it should booking a seat', done => {
          chai
            .request(app)
            .post('/api/v1/bookings')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo"}`)
            .send({
                "trip_id":500

              })
            .end((err, res) => {
              res.should.have.status(409);
              done();
            });
        });






     
      
          });

