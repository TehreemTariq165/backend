import { v2 as cloudnary } from 'cloudinary';
import fs from 'fs';
cloudinary.config({
 CLOUDINARY_NAME : process.env. CLOUDINARY_CLOUD_NAME,
API_KEY :process.env.CLOUDINARY_API_KEY,
API_SECRET: process.env.CLOUDINARY_API_SECRET

  });
  const uploadFileonCloudnary = async (localfilePath) => {
  try{
    if(!localfilePath) return null;
  const response = await cloudnary.uploader.upload(localfilePath, {
    resource_type : 'auto'
  })
  console.log("File has been uploaded successfully", response.url)
  return response;
}
catch (err) {
    fs.unlinkSync(localfilePath)
    return null;
}

}
  export  {uploadFileonCloudnary};
 