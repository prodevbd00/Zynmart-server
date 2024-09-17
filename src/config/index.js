import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo_connection_String: process.env.MONGO_CONNECTION_STRING,
  mongo_user: process.env.USER,
  mongo_pass: process.env.PASSWORD,
};
