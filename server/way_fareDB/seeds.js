import users from '../model/users';
import trips from '../model/trip';
import bookings from '../model/book';
import DbHelper from '../helpers/DbHelper';

const { query } = DbHelper;
// Insert user seeds query
const usersTableSeedsQuery = `
        INSERT INTO users(email,first_name,last_name,password,is_admin) 
        values($1,$2,$3,$4,$5);
      `;

// Insert trip seeds query
const tripsTableSeedsQuery = `
      INSERT INTO trips(seating_capacity,fare,origin,destination,trip_date,bus_license_number)
        values($1,$2,$3,$4,$5,$6);
      `;

 // Insert booking seeds query     
const bookingsTableSeedsQuery = `
      INSERT INTO bookings(seat_number,created_on,trip_id,user_id)
        values($1,$2,$3,$4);
      `;
 

 //put seeds in users table

const usersTableSeeder = async () => {

  for (const user of users) {

    await query(usersTableSeedsQuery, [
      user.email,
      user.first_name,
      user.last_name,
      user.password,
      user.is_admin
    ]);
  }
};

 //put seeds in trips table

const tripsTableSeeder = async () => {
  
  for (const trip of trips) {
   
    await query(tripsTableSeedsQuery, [
      trip.seating_capacity,
      trip.fare,
      trip.origin,
      trip.destination,
      trip.trip_date,
      trip.bus_license_number,

    ]);
  }
};

//put seeds in bookings table

const bookingsTableSeeder = async () => {

    for (const book of bookings) {

      await query(bookingsTableSeedsQuery, [
        book.seat_number,
        book.created_on,
        book.trip_id,
        book.user_id
      ]);
    }
  };

export default {
    usersTableSeeder, 
    tripsTableSeeder,
    bookingsTableSeeder 
};
