import {generateToken,encryptPass, checkPassword} from './../helpers';
import users from '../model/users';
import uuid from 'uuid';


//class contain all user operation
class UserController {
    
// new user 
static  registerUser(req, res) {

const newUser = {
user_id:uuid.v4(),
email:req.body.email,
password:encryptPass(req.body.password),
first_name: req.body.first_name,
last_name: req.body.last_name,
is_admin:false
};
for (let i =0; i<users.length;i++){
  
    if(users[i].email===req.body.email )
       
      return res.status(400).send({ status: 400, message: "choose another email this was taken" });
      
           
        }
const token = generateToken(users.email);
users.push(newUser);

return res.status(201).send({status:201, message: 'success signup', data: { 
token,
email:req.body.email,
user_id:newUser.user_id,
first_name: req.body.first_name,
last_name: req.body.last_name,
is_admin:newUser.is_admin
 } });

}


// user signin function
static  login(req, res) {


const {email, password}=req.body;


for (let i =0; i<users.length;i++){

    if((users[i].email===email) && (checkPassword(users[i].password,password))){
        const token = generateToken(users[i]);
        return res.status(200).send({status:200, message: 'success signin', data: { 
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