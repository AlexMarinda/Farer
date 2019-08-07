import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import users from '../model/users';
const should=chai.should();
chai.use(chaiHttp);
const [user1]=users;

describe('signup', () => {
    it('POST /api/v1/auth/signup should create a new account', (done) => {
        const newUser={
            
            email: 'jules@gmail.com',
            password: '$1233r4eee',
            first_name: 'malalex',
            last_name: 'alex',
            
        };
        chai.request(app)
          .post('/api/v1/auth/signup')

          .send(
            newUser)
          .end((err, res)=>{
              //console.log(res);
              res.should.have.status(201);
              res.body.should.have.property('data').have.property('token');
              res.body.should.have.property('data').have.property('email').be.eql('jules@gmail.com');
              done();
          })

        
    });
  

    it('it should return 400  when user missing some  inputs', done => {
        
        chai.request(app)
          .post('/api/v2/auth/signup')
          .send({
            first_names: 'malalex'
          })
          //"email is required"
          
          .end((err, res) => {
            res.should.have.status(404);
          
            res.body.should.have.property('status').eql(404);
            res.body.should.have.property('message').eql('URL NOT FOUND!');
  
            done();
          });
      });
    
});


describe('signin', () => {
    it('POST /api/v1/auth/signin should signin', (done) => {
        const user={
            
            email: user1.email,
            password: 'Password@123'
  
            
        };
        chai.request(app)
          .post('/api/v1/auth/signin')

          .send(
              user)
          .end((err, res)=>{
              console.log(res);
              res.should.have.status(200);
              res.body.should.have.property('status').eql(200);
              res.body.should.have.property('message').eql('user successful signin');
              res.body.should.have.property('data').be.a('object');
              res.body.should.have.property('data').have.property('token');
            
              done();
          });

        
    });
    it('it should return 400  when user missing some  inputs', done => {
        
        chai.request(app)
          .post('/api/v2/auth/signin')
          .send({
            enail: 'malalex@gmail.com',
            password:'pdfdfdf'
          })


          //"email is required"
          
          .end((err, res) => {
            res.should.have.status(404);
          
            res.body.should.have.property('status').eql(404);
            res.body.should.have.property('message').eql('URL NOT FOUND!');
  
            done();
          });
      });

    
    
});