const fs = require("fs");
const path = require("path");

// Synchronous 

console.log("***************");
console.log(" Synchronous");
console.log("***************");

// To create a sub folder 
const datafolder = path.join(__dirname , "data");
    // Check if the folder exists using fs.existsSync()
    // If no then create using fs.mkdirSync();
if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log("Folder named data created")
}else{
    console.log("Folder already exists");
}

// To create a new file in the subfolder
const newFilePath = path.join(datafolder, "newfile.txt");
// Synchronous way of creating a file
fs.writeFileSync(newFilePath , "Hello from node JS..");
console.log("File created successfully...")


// To read the content from the file we created 
let dataFromFile = fs.readFileSync(newFilePath , "utf8");
console.log("\nData from file \n" , dataFromFile);


// To append data in the file
fs.appendFileSync(newFilePath , "\nThis the appeneded data");
dataFromFile = fs.readFileSync(newFilePath , "utf8");
console.log("\nData from file \n" , dataFromFile);

// Asynchronous 

console.log("***************");
console.log("  Asynchronous");
console.log("***************");

// create a new folder
const asyncDataFolder = path.join(__dirname , "asynchFolder");
if(!fs.existsSync(asyncDataFolder)){
    fs.mkdir(asyncDataFolder, (err)=>{
        if(err){
            console.log("Error occured while creating a folder with only mkdir");
            return;
        }
        console.log("\nAsync Folder created")
    } )
}
else {
    console.log("Folder already exists...")
}

// Writing/ Creating a new file
fs.writeFile(path.join(asyncDataFolder, "asyncFile.txt") , "Hello this is for async file" , (err)=>{
    if(err){
        console.log("An error occured in creating a file...");
        return;
    }else{
        console.log("Async File Created successfully...")
    }
})

// Reading
fs.readFile(path.join(asyncDataFolder, "asyncFile.txt") , "utf8" , (err , data)=>{
    if(err){
        console.log("An error occurred in reading the file...");
        return;
    }else{
        console.log("Data from async file : ", data);
    }
})


