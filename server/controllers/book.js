
import {findTripById, findUserById} from '../helpers';
import bookings  from '../model/book';


// all bookings operation class

class Booking {
    



 // get all booking


static  getAllBookings(req, res) {
let allBookings = [];
let booking =null;
for(let i=0;i<bookings.length;i++){
     const foundTrip =findTripById(bookings[i].trip_id)
     const foundUser =findUserById(bookings[i].user_id)

     booking ={
          booking_id:bookings[i].book_id , 
          bus_license_number:foundTrip.bus_license_number,
          seat_number:bookings[i].seat_number,
          trip_date: foundTrip.trip_date,
          first_name:foundUser.first_name,
          last_name:foundUser.last_name,
          user_email:foundUser.email
     }
     allBookings.push(booking);
}

console.log('allBookings', allBookings);
    if(!allBookings){
        return res.status(200).send({ status: 'success', data: { 
        'message':'bookings not found!'
     } });
}
     res.status(200).send({ status: 'success', data: allBookings});

}




}

export default Booking;