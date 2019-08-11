import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const connectionString = DATABASE_URL;
export const pool = new Pool({
  connectionString
});