// importing libraries
import express from 'express';

// database model
import { UserModel } from "../../database/allmodels";

// initializing the Router
const Router=express.Router();

/**
 * Route        /:_id
 * Des          get all userdata
 * Params       :_id
 * Access       Private
 * Method       GET
 */

Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const userData=await UserModel.findById(_id);
        if(!userData){
            return res.status(404).json({error: "user not found"});
        }
        return res.status(200).json({userData});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})


/**
 * Route        /update/:userid
 * Des          update userdata 
 * Params       :userid
 * Access       Private
 * Method       put
 */

Router.put("/update/:userid",async(req,res)=>{
    try{
        const {userid} = req.params;
        const {userdata}=req.body;
        const updatedData=await UserModel.findByIdAndUpdate(userid,
            {
                $set=userdata,
            },
            {
                new: true,
            }
            )
        return res.json({user: "updated user details"})
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})
export default Router;