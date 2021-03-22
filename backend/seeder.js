import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import speedlimitrefs from './data/speedlimitrefs.js';
import SpeedLimitRef from './models/speedLimitRefModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //remove all data
    await User.deleteMany();
    await SpeedLimitRef.deleteMany();
    // and then add it
    await User.insertMany(users);
    await SpeedLimitRef.insertMany(speedlimitrefs);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// you could write a delete method too but ehh
importData();
