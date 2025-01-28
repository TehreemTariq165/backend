<<<<<<< HEAD
=======
//require('dotenv').config({ path: './.env' });
>>>>>>> 98361c1a1148dd92a722961d73aed9c163957bbc
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ConnectMongoDb from './db/index.js'; 
dotenv.config({ path: "./.env" });
import express from 'express';
<<<<<<< HEAD
import app from './app.js';

// Import routes

ConnectMongoDb() 
  .then(() => {
    const PORT = process.env.PORT || 4000;  
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
=======
const app = express();


ConnectMongoDb().then(()=>
    {
        app.on("error", (err)=>
        {
            console.log("Error occured: ", err);
             throw err;
        })
        const PORT = process.env.PORT||5000;
        app.listen(PORT,()=>{
     console.log(`Database connected at ${process.env.PORT}`);
        });
     
    }
).catch((error)=>{
    console.error('Error: ', error);
    process.exit(1);
})
>>>>>>> 98361c1a1148dd92a722961d73aed9c163957bbc
