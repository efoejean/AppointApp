import express from 'express';
import config from './config';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
