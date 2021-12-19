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

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());

// checking the connection and initializing the port
zomato.listen(4000, ()=>{
    ConnectDB().then(()=>{
        console.log("server is running sucessfully");
    })
    .catch(()=>{
        console.log("server is running but database connection is failed");
    })
})