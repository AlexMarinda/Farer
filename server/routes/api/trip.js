import express from 'express';
import CreateTrip from '../../controllers/trip';
import {verifyToken} from '../../helpers';
import isAdmin from '../../middleware/is_admin';
import {Validation} from '../../middleware/validation';




const router = express.Router();

//router.post('/',verifyToken,isAdmin, Create_trip.trip);
router.post('/',verifyToken,isAdmin,Validation.createTripValidator,CreateTrip.trip);
router.get('/',verifyToken, CreateTrip.getAllTrip);
router.patch('/:trip_id/cancel/',verifyToken,isAdmin, CreateTrip.cancelTrip);
router.get('/:trip_id',verifyToken, CreateTrip.getSpecificTrip);
router.post('/filter', verifyToken,CreateTrip.filterTrips);





export default router;