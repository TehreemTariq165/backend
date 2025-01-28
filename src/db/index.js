import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const ConnectMongoDb = async () => {
    try {
      const MongoDbInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`);
      console.log(`MongoDb is connected successfully: ${MongoDbInstance.connection.host}`);
    } catch (error) {
      console.error('Error: ' + error);
<<<<<<< HEAD
 
=======
      process.exit(1);
>>>>>>> 98361c1a1148dd92a722961d73aed9c163957bbc
    }
  };
  

export default ConnectMongoDb;
