// Provides utilities to work with files directories

const path = require("path");

console.log("\n*************************");
console.log("Complete Address : ",__filename);
console.log("************************\n");

console.log("*************************");
console.log("Current Directory : ",path.dirname(__filename));
console.log("************************\n");

console.log("*************************");
console.log("Current File : ",path.basename(__filename));
console.log("************************\n");

console.log("*************************");
console.log("File Extension : ",path.extname(__filename));
console.log("************************\n");

console.log("*************************");
console.log("Join Path : ",path.join("User","Documents","RockStar Games","GTA V"));
console.log("************************\n");

console.log("*************************");
console.log("Resolved Path : ",path.resolve("User","Documents","RockStar Games","GTA V"));
console.log("************************\n");

console.log("*************************");
console.log("The path seperator for this os is : ", path.sep );
console.log("************************\n");