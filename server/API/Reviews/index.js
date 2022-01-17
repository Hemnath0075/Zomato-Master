// importing libraries
import express from 'express';
import passport from "passport";

// database model
import { ReviewModel } from "../../database/allmodels";

// initializing the Router
const Router=express.Router();

/**
 * Route        /:resid
 * Des          get all reviews for a particular restaurant with restaurant id
 * Params       resid
 * Access       Public
 * Method       GET
 */

Router.get("/:resid",async(req,res)=>{
    try{
        const {resid} = req.params;
        const reviews=await ReviewModel.find({restaurants: resid});
        return res.status(200).json({reviews});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

/**
 * Route        /addreview
 * Des          adding the new review 
 * Params       none
 * Access       Private
 * Method       post
 */
Router.post("/addreview",passport.authenticate("jwt"),async(req,res)=>{
    try{
        const { _id } = req.session.passport.user._doc;
        const {reviewData}=req.body;
        await ReviewModel.create({...reviewData,user: _id});
        return res.json({review: "sucessfully added the review"});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

/**
 * Route        /deletereview/:id
 * Des          deleting the review on its id
 * Params       :id
 * Access       Private
 * Method       delete
 */

Router.delete("/deletereview/:id",async(req,res)=>{
    try{
        const {id}=req.params;

        await ReviewModel.findByIdAndDelete({_id: id});
        return res.json({reviews: "sucessfully deleted the review"});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})



export default Router;