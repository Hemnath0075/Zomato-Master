// libraries
import express from 'express';

// database modal
import {MenuModel , ImageModel} from '../../database/allmodels';

// intialize route
const Router = express.Router();

/**
   * Router       /list/_id
   * Des          getting list of menus from pariticular restaurant id
   * Params       _id
   * Access       Public
   * Method       GET
*/

Router.get('/list/:_id',async (req,res)=>{
    try{
        const {_id} =req.params;
        const menus=await MenuModel.findById(_id);
        if(!menus){
            res.status(404).json({error: "There is no menu on this Resaturant"})
        }
        return res.json({menus});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

/**
   * Router       /image
   * Des          getting list of menu images with restaurant id 
   * Params       _id
   * Access       Public
   * Method       GET
*/

Router.get('/image/:_id',async(req,res)=>{
   try{
    const {_id } = req.params;
    const menuImages= await ImageModel.findOne(_id);

    if(!menuImages){
        return res.status(404).json({error: "No images on this restaurant"});
    }
    return res.json({menuImages});
   }catch(error){
    
    return res.status(500).json({error: error.message});
   }
})








export default Router;