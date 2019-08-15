import JWT from 'jsonwebtoken';
import moment from 'moment';
import {findTripById, findUserById,jwtVerifiy} from '../helpers';
import bookings  from '../model/book';
import DbHelper from './../helpers/DbHelper';
import Respond from '../helpers/responseHandle';

// import uuid from 'uuid';


// all bookings operation class
const { response } = Respond;


// all bookings operation class

class Booking {
  // book a seat

  
    // const getUser = JWT.decode(req.headers.authorization);

static  async bookSeat(req, res) {

const newBook = {
     seat_number:1,
    created_on:moment().format(),
     trip_id:req.body.trip_id,
     user_id: req.user.user_id,


};
 const { error, response: result } = await DbHelper.queryAll('trips');
 const { rows: trips } = result;

for (let i =0; i<trips.length;i++){
  if(trips[i].status==="inactive" )
     
    return res.status(409).send({ status: 409, data: "this trip was canceled" });
    
         
     }



const { error: errors, response: resp } = await DbHelper.insert('bookings',newBook);
if (errors) {
  return response(res, 500, 'Oops! unexpected things happened into server', true);
}
const { rows, rowCount } = resp;
if (rowCount > 0) {
  const [addedbook] = rows;
  return response(res, 201, addedbook,);
}
return response(res, 400, 'no trip found', true);
}




  // get all booking


  static getAllBookings(req, res) {
    const allBookings = [];
    let booking = null;
    for (let i = 0; i < bookings.length; i++) {
      const foundTrip = findTripById(bookings[i].trip_id);
      const foundUser = findUserById(bookings[i].user_id);

      booking = {
        booking_id: bookings[i].book_id,
        bus_license_number: foundTrip.bus_license_number,
        seat_number: bookings[i].seat_number,
        trip_date: foundTrip.trip_date,
        first_name: foundUser.first_name,
        last_name: foundUser.last_name,
        user_email: foundUser.email,
      };
      allBookings.push(booking);
    }


    if (!allBookings) {
      return res.status(404).send({ status: 404, message: 'bookings not found!' });
    }
    res.status(200).send({ status: 200, message: 'success to view bookings', data: allBookings });
  }

  static async numberOfSeat(req, res) {
     const { book_id } = req.params;
     // retrieve property first
     const { response: books } = await  DbHelper.findOne('bookings', 'book_id ', book_id );
     // check if we got anything
     const { rows, rowCount } = books;
     if (rowCount > 0) {
       const [book] = rows;
       if (req.user.user_id === book.user_id) {
         const payload = { seat_number: req.body.seat_number };
         const { response: result } = await  DbHelper.update('bookings', payload, 'book_id',book_id);
         const { rows: items, rowCount: counts } = result;
         if (counts > 0) {
           const [item] = items;
           return response(res, 200, 'seat numbers  added successfully');
         }
       }
       return response(res,403, 'You are allowed to add seat number on your booking only!' ,true);
     }
     return response(res, 404, 'No booking found', true);
   }


  // delete booking

  static async deleteBooking(req, res) {
    const { book_id } = req.params;
    
    const { response: booking } = await DbHelper.findOne('bookings', 'book_id', book_id);
    
    const { rows, rowCount } = booking;
    if (rowCount > 0) {
      const [book] = rows;
      if (req.user.user_id === book.user_id) {
        const { error, response: result } = await DbHelper.deleteItem('bookings', 'book_id', book_id);
        if (!error) {
          const { rowCount: count } = result;
          if (count > 0) {
            return response(res, 200, 'booking deleted successfully', false, true);
          }
        }
        return response(res, 500, 'Oops! unexpected things happened into server', true);
      }
      return response(res, 403, 'You are allowed to delete your booking only!' , true);
    }
    return response(res, 404, 'no booking found!', true);
  }




}

export default Booking;
