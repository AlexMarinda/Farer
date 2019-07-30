import express from 'express';
import CreateTrip from '../../controllers/trip';
import {verifyToken} from '../../helpers';
import isAdmin from '../../middleware/is_admin';
import {Validation} from '../../middleware/validation';




const router = express.Router();

//router.post('/',verifyToken,isAdmin, Create_trip.trip);
router.post('/',verifyToken,isAdmin,Validation.createTripValidator,CreateTrip.trip);




export default router;