import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;
const connectionString = DATABASE_URL;
const client = new Client({
  connectionString,
});
client.connect();

const book = async (req, res) =>{
const sql  =await client.query(`SELECT bookings.seat_number,bookings.created_on, trips.bus_license_number,trips.origin,trips.destination,trips.trip_date, users.first_name,users.last_name
FROM bookings
INNER JOIN trips ON bookings.trip_id=trips.trip_id
LEFT OUTER JOIN users on bookings.user_id=users.user_id`);
const findTrip=sql.rows;
if (findTrip) {
  
  res.status(200).json({ status: 200, data: findTrip});
  }
}
 



export default  book;
  