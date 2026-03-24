const {Image} = require("../Models/image")
const {uploadToCloudinary} = require("../Helpers/cloudinary-helper");

const uploadImageController = async (req,res)=>{
    try{

        // Check if file is missing in the request
        if(!req.file){
            res.status(400).json({
                success : false,
                message : "File missing...Please upload a file"
            })
        }

        // Upload to cloudinary
        const {url, publicID} = await uploadToCloudinary(req.file.path);

        // Now store the publicID and url with the userID in the Database
        const newUploadedImage = await Image.create({
            url : url,
            publicID : publicID,
            uploadedBy : req.UserInfo.userID,
        })

        if(newUploadedImage){
            res.status(201).json({
                success : true,
                message : "Upload Successful",
                image : newUploadedImage
            })
        }

    }catch(err){
        console.log("error");
        res.status(500).json({
            success : "false",
            message : "Something went wrong..."
        })
    }
}

module.exports = {uploadImageController};