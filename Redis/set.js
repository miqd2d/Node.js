const client = require("./client");

// Insert values in set
const insertValue = async(key, value)=>{
    await client.sadd(key,value);
}

// Remove value in set
const removeValue = async(key, value)=>{
    const result = await client.srem(key,value);
    if(result){
        console.log(`${value} removed from set`);
    }
    else {
        console.log(`${value} does not exist in set`)
    }
}

// Check if in set
const checkIfInSet = async (key,value) =>{
    const result = await client.sismember(key, value);
    if(result){
        console.log(`${value} present in set`);
    }else {
        console.log(`${value} absent in set`);
    }
}

insertValue("setTest", 1);
insertValue("setTest", 2);
insertValue("setTest", 3);
insertValue("setTest", 4);
checkIfInSet("setTest",1);
removeValue("setTest", 1);
checkIfInSet("setTest",1);
removeValue("setTest", 2);
removeValue("setTest",1);