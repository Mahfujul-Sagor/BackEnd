import {v2 as cloudinary} from 'cloudinary';
import { log } from 'console';
import fs from 'fs';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SERECT,
});


const uploadOnCloudinary = async (localFilePath)=> {
  try {
    if(!localFilePath) {return 'could not find local file'};
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    // console.log('file is uploaded successfully on cloudinary', response.url);

    // console.log(response);

    fs.unlinkSync(localFilePath);
    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath); //removes the locally uploaded temporary file as the upload operation failed
    return null;
  }
};


export {uploadOnCloudinary};