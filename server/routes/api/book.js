import express from 'express';
import Booking from '../../controllers/book';
import {verifyToken} from '../../helpers';
import isAdmin from '../../middleware/is_admin';





const router = express.Router();


router.get('/',verifyToken,isAdmin, Booking.getAllBookings);





export default router;