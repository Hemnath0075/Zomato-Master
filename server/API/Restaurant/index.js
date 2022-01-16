// imporing Libraries
import express from 'express';

// database model
import {RestaurantModel} from '../../database/allmodels';

// intializing The Router
const Router = express.Router();


/**
   * Router       /
   * Des          filtering out restaurants on city {using query,"?variable=value"}
   * Params       none query as city
   * Access       Public
   * Method       GET
*/

Router.get("/", async(req,res)=>{
    try{
        // http:localhost:4000/restaurants/?city=chennai
        const {city} = req.query;
        const restaurants= await RestaurantModel.find({ city });
        if(restaurants.length === 0){
            return res.json({error: "Oops! There is no Restaurants on this city"});
        }
        return res.json({restaurants});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
   * Router       /
   * Des          getting restaurant on its id {using params, ":parameter"}
   * Params       _id
   * Access       Public
   * Method       GET
*/

Router.get('/:_id', async(req,res)=>{
    try{
        const {_id}=req.params;
        const restaurant=await RestaurantModel.findById({_id});
        if(!restaurant) 
        return res.json({error: "There is no Restaurant on this id"});

        return res.json({restaurant});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})



/**
   * Router       /search/:searchString
   * Des          filtering out restaurants on city
   * Params       serachString
   * Access       Public
   * Method       GET
*/
Router.get("/search/:searchString" ,async(req,res)=>{
    try{
        const { searchString}=req.params;
        const restaurants=await RestaurantModel.find({
            //  options "i" means caseInsensitive 
            name:{ $regex: searchString, $options: "i"}
        })
        if(!restaurants){
            return res.json({error: `There is no Restaurants with ${searchString}`});
        }

        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})


export default Router;


