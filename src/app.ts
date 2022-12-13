import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import config from 'config';
import cors from 'cors';

import logger from './utils/logger';
import routes from './routes/routes.index';
import dbConnect from './utils/dbConnect';

const port = config.get<number>('port') | 1337;

const app = express();

app.use(express.json());
app.use(cors());

//add default / route to display a webpage that says server is running
app.get('/', (_req, res) => {
  res.send('Server is running');
});

app.listen(port, async () => {
  logger.info(`Server is listening on port at localhost:${port}`);
  await dbConnect();
  routes(app);
});
