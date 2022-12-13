import mongoose from 'mongoose';
import logger from './logger';

const dbConnect = async () => {
  // const dbPort = config.get<number>('mongo.port');

  const dbUri = `mongodb+srv://azuladev:userpwa@cluster0.clipiym.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbUri);
    //connect to mentioned database

    logger.info(`Connected to PWA database`);
  } catch (err) {
    console.log('err', err);
    logger.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

export default dbConnect;
