import DbHelper from './../helpers/DbHelper';
import Queries from './tables';
import Seeders from './seeds';

const { query } = DbHelper;
// drop ,seeding and create tables
const { dropUsersTable ,dropTripsTable,dropBookingsTable ,createUsersTable,createTripsTable,createBookingsTable } = Queries;
const { usersTableSeeder, tripsTableSeeder,bookingsTableSeeder } = Seeders;

// operation
export const initDB = async () => {
    // start troping tables
  await query(dropTripsTable);
  await query(dropUsersTable);
  await query(dropBookingsTable);

  //  start create tables
  await query(createTripsTable);
  await query(createUsersTable);
  await query(createBookingsTable);
  // start seeding
  await usersTableSeeder();
  await tripsTableSeeder();
  await bookingsTableSeeder();
};
initDB();
