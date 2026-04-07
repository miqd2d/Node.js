const client = require("./client")

const getData = async(key) =>{
    const result = await client.get(key);    
    console.log(result);
}

const setData = async(key, value) =>{
    await client.set(key,value);
}

getData("user:1");
setData("user:4", "Mary Jane");
getData("user:2");
