const multer = require("multer");
const path = require("path");

// Set out multer storage 
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, "uploads/");
    },
    filename : function(req,file,cb){
        cb(null, 
        file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// File filter
const checkFileFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null, true);
    }else {
        cb(new Error ("Not an Image! Please Upload only images..."))
    }
}

// Multer Middleware
module.exports = multer({
    storage : storage,
    fileFilter : checkFileFilter,
    limits : 15 * 1024 * 1024                   // 15 Mb file size
})