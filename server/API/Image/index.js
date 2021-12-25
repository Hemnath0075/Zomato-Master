// libraries
import express from 'express';
import multer from 'multer';// multer is a middleware 


// database model
import {ImageModel} from '../../database/allmodels';

// importing s3utils
import {s3Upload} from '../../utils/s3';

// initalizing the Router
const Router = express.Router();

// multer configurations
const storage = multer.memoryStorage();
const upload = multer({storage});




/**
   * Router       /
   * Des          uploading the image in s3bucket and storing in database 
   * Params       None
   * Access       Public
   * Method       Post
*/

Router.get('/', upload.single("file"),async(req,res)=>{
    try{
        // assigning our file image to variable
      const file =req.file;
        
    //   s3 bucket options
    const bucketOptions = {
        Bucket:"zomatomaster07",
        Key:file.originalname,
        Body:file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read", // Access control List

    };

    const uploadImage = await s3Upload(bucketOptions);

    const saveImageToDatabase = await ImageModel.create({
        images: [{location  : uploadImage.Location}],
    })
      
    return res.status(200).json({saveImageToDatabase});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})


 

export default Router;




