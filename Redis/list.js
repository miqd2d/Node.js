const client = require("./client");

// Insert elements in the list
const insertElement = async(key , value) =>{
    await client.lpush(key,value);
}

// Pop the left element from the list
const popLeft = async(key) =>{
    const result = await client.lpop(key);
    console.log(result);
}

// Pop the left element from the list
const popRight = async(key) =>{
    const result = await client.rpop(key);
    console.log(result);
}

// insertElement("messages", "Hi");
// insertElement("messages", "Hello");
// insertElement("messages", "Bye");
// insertElement("messages", "GoodBye");

popLeft("messages");
popLeft("messages");
popRight("messages");