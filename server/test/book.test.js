import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';


chai.use(chaiHttp);

chai.should()



describe('GET /', () => {
  it('it should display all bookings', done => {
    chai
      .request(app)
      .get('/api/v1/bookings')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo"}`)
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.have.property('data');
        done();
      });
  });


    });

    /*describe('DELETE/', () => {
      it('it should delete booking ', done => {
             chai.request(app)
             .delete('/api/v1/bookings/1/delete/')
             .set('content-type', 'application/json')
             .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI4ZjZhNTNjYi1jY2VlLTQzYjYtYjQzMSIsImVtYWlsIjoibWFsYWxleDQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC9ZMHkvOTA1cGNSc1V6N0oxT2U2OC5LZjQ4UVJYcmxRNjh4aGNPWnp5cExpa0h0ZTJCV1Z5IiwiZmlyc3RfbmFtZSI6ImFsZXgiLCJsYXN0X25hbWUiOiJtYXJpbmRhIiwiaXNfYWRtaW4iOnRydWV9LCJpYXQiOjE1NjUyMDk3MTR9.NgQtSDvMOmyMEhx5ybc6t_ZK3u4nO6TJEouigrFZzJo"}`)
   
             .end((err, res) => {
               res.should.have.status(200);
               res.body.should.have.property('status').eql(200);
               res.body.should.have.property('message').eql("Booking deleted successfully");
            
               done()
             })
         });
     
       })*/
     
