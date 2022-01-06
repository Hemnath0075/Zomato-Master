// importing library
import express from 'express';
import passport from 'passport';

// importing models 
import {UserModel} from '../../database/allmodels';

// imporing validate schema


import { validateSignin, validateSignup} from '../../validation/auth';

// creating Router
const Router=express.Router();


/**
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       POST
 */
 Router.post("/signup", async (req, res) => {
    try {
      await validateSignup(req.body.credentials);
      await UserModel.findByEmailAndPhone(req.body.credentials);
      const newUser = await UserModel.create(req.body.credentials);
      const token = newUser.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  /**
   * Router       /signin
   * Des          Sign-in with email and password
   * Params       none
   * Access       Public
   * Method       POST
   */
  Router.post("/signin", async (req, res) => {
    try {
      await validateSignin(req.body.credentials);
      const user = await UserModel.findByEmailAndPassword(req.body.credentials);
      const token = user.generateJwtToken();
      return res.status(200).json({ token: token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
 

  Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
  /**
   * Router       /google/callback
   * Des          Google signin callback
   * Params       none
   * Access       Public
   * Method       GET
   */
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req,res)=>{
      return res.status(200).json({token: req.session.passport.token,status: "success"});
    }
  );

export default Router;




// for Reference
// Router.post("/signup", async(req,res)=>{
//     try{
//        const {email,password,fullname,phonenumber} = req.body.credentials;
//        const checkUserByEmail = await UserModel.findOne({email});
//        const checkUserByPhone = await UserModel.findOne({phonenumber});

//        if(checkUserByEmail || checkUserByPhone){
//            return res.json({user: "User already Exists!"});
//        }

//        // hashing our password
//        const bcryptsalt = await bcrypt.genSalt(6);
//        const hashedpassword= await bcrypt.hash(password,bcryptsalt);
        
//        // saving to our Database(MongoDB)

//        await UserModel.create({...req.body.credentials,password:hashedpassword});

//        //generating JWT auth token(JSON Web Token)

//        /**
//         * sign() is used for creating a new token here 
//         * "zomatoapp" is secret string for converting to token
//         */
//        const token=jwt.sign({user:{fullname,email} },"zomatoapp");
//        res.status(200).json({token,status: "our api is success"});
//     }catch(error){
//        return res.status(500).json({error: error.message});
//     }
// })