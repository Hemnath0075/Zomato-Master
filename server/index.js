// for babel
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});

// importing other packages
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import ConnectDB from './database/connection'

// API

import Auth from './API/Auth';

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());


// Application Routes
// localhost:4000/auth/signup
zomato.use("/auth", Auth);










// checking the connection and initializing the port

zomato.listen(4000, ()=>{
    ConnectDB().then(()=>{
        console.log("server is running sucessfully");
    })
    .catch(()=>{
        console.log("server is running but database connection is failed");
    })
})