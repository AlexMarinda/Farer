import express from 'express';
import Booking from '../../controllers/book';
import {verifyToken} from '../../helpers';
import isAdmin from '../../middleware/is_admin';
import book from './../../get';
import {Validation} from '../../middleware/validation';




const router = express.Router();

router.post('/',verifyToken,Validation.bookSeatValidator,Booking.bookSeat);
router.get('/',verifyToken,isAdmin, book);
router.patch('/seat/:book_id',verifyToken, Booking.numberOfSeat);
router.delete('/:book_id/delete/',verifyToken, Booking.deleteBooking);




export default router;