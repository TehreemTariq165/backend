import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ConnectMongoDb from './db/index.js'; 
dotenv.config({ path: "./.env" });
import express from 'express';
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
