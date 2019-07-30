import express from 'express';
import Booking from '../../controllers/book';
import {verifyToken} from '../../helpers';
import isAdmin from '../../middleware/is_admin';
import {Validation} from '../../middleware/validation';





const router = express.Router();


router.get('/',verifyToken,isAdmin, Booking.getAllBookings);
router.post('/',verifyToken,Validation.bookSeatValidator,Booking.bookSeat);







export default router;