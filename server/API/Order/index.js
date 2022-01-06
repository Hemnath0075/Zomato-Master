// importing libraries
import express  from 'express';
import passport from 'passport';

// import database model
import {OrderModel} from '../../database/allmodels';

import validateUser from "../../config/validateUser";

// intialize the Router
const Router=express.Router();

/**
   * Router       /:_id
   * Des          getting orders on user id 
   * Params       _id
   * Access       Private
   * Method       get
*/

Router.get("/:id",passport.authenticate("jwt") ,async(req,res)=>{
    try{
        await validateUser(req, res);
        const {_id} = req.params;
        const getOrders=await OrderModel.findOne({user: _id});
        if(!getOrders){
            return res.json({error: "user not found"});
        }
        return res.status(200).json({orders: getOrders});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})


/**
 * Route        /new/:_id
 * Des          Add new order
 * Params       _id
 * Access       Private
 * Method       POST or PUT
 */

Router.post("/new/:_id",passport.authenticate("jwt"),async(req,res)=>{
    try{
        const {_id}=req.params;
        const {orderDetails}=req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {user: _id,},
            {$push: {orderDetails: orderDetails}},
            {new: true},
        );
        return res.status(200).json({order: addNewOrder});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})



export default Router;