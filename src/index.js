//require('dotenv').config({ path: './.env' });
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ConnectMongoDb from './db/index.js'; 
dotenv.config({ path: "./.env" });
import express from 'express';
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
