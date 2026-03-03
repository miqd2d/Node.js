// What are modules in JS

/*
Allows you to use codes from different files.
Code can be organized into multiple files
Root -> Mod1 + Mod2 + Mod3
*/

// module.exports _-> For exporting code/functions
// require -> For importing code/functions

const myModules = require ("./myModules");

console.log("\n*********Inside the Main File***********\n");
console.log("Main File - File name : ", __filename);
console.log("Main Fule - Dir Name : ",__dirname);

try{
    console.log(myModules.sum(34,5))
    console.log(myModules.division(2,0));
}catch(e){
    console.log("Error occured", e.message);
}
