// importing other packages
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import ConnectDB from './database/connection'
import passport from "passport";

// google authentication config
import googleAuthConfig from "./config/google.config";

// API'S Files





import Auth from './API/Auth';
import Food from './API/Food';
import Restaurant from './API/Restaurant';
import Menu from './API/Menu';
import Image from './API/Image';
import Order from './API/Order';
import Reviews from './API/Reviews';
import User from './API/User';


// PRIVATE ROUTES
import privateRouteConfig from './config/route.config';

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());



// Application Routes
// localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/review",Reviews);
zomato.use("/user",User);






// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);






// checking the connection and initializing the port

zomato.listen(4000, ()=>{
    ConnectDB().then(()=>{
        console.log("server is running sucessfully");
    })
    .catch(()=>{
        console.log("server is running but database connection is failed");
    })
})