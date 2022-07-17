import dotenv from 'dotenv';
import { Config } from './config.d';
dotenv.config();

const config: Config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  db: {
    name: process.env.DB_NAME,
    url: process.env.MONGO_DB_URL,
  },
  port: parseInt(process.env.PORT || '3000', 10),
};

export default config;
