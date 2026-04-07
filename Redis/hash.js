const client = require("./client");

// Insert the royalenfield hunter data in a hashset for key bike:2
const insertBike2 = async()=>{
    await client.hset("bike:2" , 
        {
            "model" : "Royal Enfield Hunter 350",
            "color" : "Blue"
        }
    )
}

// get the bike 2
const getBike2 = async()=>{
    const result = await client.hgetall("bike:2");
    console.log(result);
}

insertBike2();
getBike2();