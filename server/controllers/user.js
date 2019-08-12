import {generateToken,encryptPass, checkPassword} from './../helpers/index';
import users from '../model/users';
import DbHelper from './../helpers/DbHelper';
import Respond from '../helpers/responseHandle';
import dotenv from 'dotenv';

dotenv.config();

const { response } = Respond;



//class contain all user operation
class UserController {
    
// new user 
static   async registerUser (req, res) {

const newUser = {
email:req.body.email,
password:encryptPass(req.body.password),
first_name: req.body.first_name,
last_name: req.body.last_name
};
const { error: firstError, response: firstResult } = await DbHelper.findOne('users', 'email', newUser.email);

if (firstError) {
  return response(res, 500, 'Oops! unexpected things happened into server', true);
}
if(firstResult.rowCount>0){
  return response(res, 400, 'email must be provided!', true);

}

const { error, response: result } = await DbHelper.insert('users', newUser);
if (error) {
 
  return response(res, 400, error, true);
}
const [creatededUser] = result.rows;

const token = generateToken(creatededUser);
users.push(newUser);
delete creatededUser.password;
return response(res, 201,  {token,creatededUser});

}


// user signin function
static  login(req, res) {


const {email, password}=req.body;


for (let i =0; i<users.length;i++){

    if((users[i].email===email) && (checkPassword(users[i].password,password))){
        const token = generateToken(users[i]);

        return res.status(200).send({status:200, message: 'user successful signin', data: { 

            token,
            user_id:users[i].user_id,
            email:users[i].email,
            first_name: users[i].first_name,
            last_name: users[i].last_name,
            is_admin:users[i].is_admin
             } });
           }
        }

    return res.status(404).send({ status: 404, 
message:'User not found!'
  });


}

}
export default UserController;