

// importing other packages
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import ConnectDB from './database/connection'
import passport from "passport";

// google authentication config
import googleAuthConfig from "./config/google.config";




// passport config
googleAuthConfig(passport);


// API'S Files

import Auth from './API/Auth';

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());



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