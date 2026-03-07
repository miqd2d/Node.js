// Using inbuilt fs.promises to get the appropriate files for async-await to work with
const {readFile , writeFile , appendFile} = require("fs").promises;

// Adding the content to the file
const fs = require("fs");
fs.writeFileSync("input.txt" , "Initial File Data");

const main = async()=>{
    // Read file
    console.log("\n*****First Read******");
    console.log(await readFile("input.txt", "utf8"));
    console.log("*********************");
    // Write file
    await writeFile("input.txt" , "This is the text after writing new details");
    // Append file
    await appendFile("input.txt" , "\nAppended text");
    // Read file again
    console.log("\n****Second Read *****");
    console.log (await readFile("input.txt" , "utf8"));
    console.log("*********************");
}

main();