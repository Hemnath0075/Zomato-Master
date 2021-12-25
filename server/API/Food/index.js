// libraries 
import express from 'express';

// database models
import { FoodModel } from '../../database/allmodels';

// intializing the Router
const Router = express.Router();


/**
   * Router       /r/_id
   * Des          getting all foods on the particular Restaurant (with id)
   * Params       _id
   * Access       Public
   * Method       GET
*/
Router.get("/r/:_id", async(req,res)=>{
    try{
        const {_id}=req.params;
        const foods=await FoodModel.find({restaurants: _id});
        
        return res.json({ foods })
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

/**
   * Router       /c/:category
   * Des          getting all foods on the the category
   * Params       category
   * Access       Public
   * Method       GET
*/
Router.get("/c/:category",async(req,res)=>{
    try{
        const {category}=req.params;
        const foods = await FoodModel.find({
             //  options "i" means caseInsensitive 
            category: {$regex: category,$options : "i"}
        })
        if(!foods){
            return res.json({error : `There is no foods on this ${category}` })
        }
        return res.json({foods})
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
})







export default Router;