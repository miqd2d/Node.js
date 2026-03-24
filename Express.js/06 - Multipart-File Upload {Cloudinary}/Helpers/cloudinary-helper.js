const cloudinary = require("../Config/cloudinaryConfig");

const uploadToCloudinary = async (filePath) =>{
    try{
        const result = await cloudinary.uploader.upload(filePath);
        return {
            publicID : result.public_id,
            url : result.secure_url
        }
    }catch(err){
        console.log("Error while uploading to cloudinary" , err);
        throw new Error("Error while uploading to cloudinary");
    }
}

module.exports = {uploadToCloudinary}