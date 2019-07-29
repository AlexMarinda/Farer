import {generateToken,encryptPass, checkPassword} from './../helpers';
import users from '../model/users'


//class contain all user operation
class UserController {
    
// new user 
static  registerUser(req, res) {

const newUser = {
user_id:users.length + 1,
email:req.body.email,
password:encryptPass(req.body.password),
first_name: req.body.first_name,
last_name: req.body.last_name
};
for (let i =0; i<users.length;i++){
  
    if(users[i].email===req.body.email )
       
      return res.status(200).send({ status: 'success', data: "choose another email this was taken" });
      
           
        }
const token = generateToken(users.email);
users.push(newUser);

return res.status(201).send({ status: 'success', data: { 
token,
email:req.body.email,
password:encryptPass(req.body.password),
first_name: req.body.first_name,
last_name: req.body.last_name
 } });

}




}
export default UserController;