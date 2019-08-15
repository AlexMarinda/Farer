import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import users from '../model/users';


const [user1] = users;
chai.use(chaiHttp);
chai.should();
// test for creating users
describe('POST /', () => {
  it('New user, it should return 201', (done) => {
    const user = {
      email: 'brand@gmail.com',
      first_name: 'brenda',
      last_name: 'Eric',
      password: '12345678',

    };
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
  });


  it('New user, it should return 409', (done) => {
    const user = {
      email: 'malalex44@gmail.com',
      first_name: 'Niyonsenga',
      last_name: 'Eric',
      password: '12345six',

    };
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(409);
        done();
      });
  });


  it('New user, it should return 400', (done) => {
    const user = {
      email: 'malale44gmail.com',
      first_name: 'Niyonsenga',
      last_name: 'Eric',
      password: '12345six',

    };
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });


  it('POST /api/v1/auth/signin should signin', (done) => {
    const user = {

      email: user1.email,
      password: 'Password@123',


    };
    chai.request(app)
      .post('/api/v1/auth/signin')

      .send(
        user,
      )
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  it('it should return 404  when user missing some  inputs', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signin')
      .send({
        email: 'malalex@gmail.com',
        password: 'pdfdfdf',
      })


    // "email is required"

      .end((err, res) => {
        expect(res.statusCode).to.equal(404);


        done();
      });
  });
});
