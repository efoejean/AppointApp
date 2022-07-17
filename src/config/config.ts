import dotenv from 'dotenv';
import { Config } from './config.d';
dotenv.config();

const config: Config = {
  api: {
    apiEndpoint: process.env.API_ENDPOINT,
    apiKey: process.env.API_KEY,
  },
  db: {
    dataSource: process.env.dataSource,
    database: process.env.database,
    collection: process.env.collection,
  },
  port: parseInt(process.env.PORT || '3000', 10),
};

export default config;
