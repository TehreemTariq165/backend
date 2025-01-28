<<<<<<< HEAD
import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public")); // Corrected this line
app.use(cookieParser());

import userRoute from "./routes/user.routes.js";

app.use("/api/v1/users", userRoute);


export default app;
=======

import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
 
const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}));
app.use(express.json({
    limit : "16kb"
}));
app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}));
app.static(express.static("public"));
app.use(cookieParser());
>>>>>>> 98361c1a1148dd92a722961d73aed9c163957bbc
