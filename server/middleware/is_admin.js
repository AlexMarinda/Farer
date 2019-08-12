import JWT from 'jsonwebtoken';
import DbHelper from './../helpers/DbHelper';
import Respond from '../helpers/responseHandle';

const { response } = Respond;

// to check if user is admin
const isAdmin = async (req, res, next) => {
    try {
     const token = req.headers.authorization.split(' ')[1] || req.body.token;
      const decoded = await JWT.verify(token, process.env.JWT_SECRET,{ expiresIn: '24h' });
      const foundUser = decoded;   
      
      const { error, response: result } = await DbHelper.queryAll('users');
    if (error) {
      return response(res, 500, 'Oops! unexpected things happened into server', true);
    }
    const { rows, rowCount } = result;
      rows.forEach((user)=>{
        if(user.email ===foundUser.email){
          if(foundUser.is_admin){
            return next();
          }
          return res.status(401).send({ status: 401, message:'Unauthorized access'}); 
        }
      });

  
    
    } 
    
    catch (error) {
      return res.status(403).send({ status: 403, message:'Failed to authenticate token' });
    }

    return true;
  };

  
  export default  isAdmin;
  