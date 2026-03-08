const http = require("http");

let visits = 0;

const server = http.createServer((req,res)=>{
    // Handling requests
    res.writeHead(200 , {"content-type" : "text/plain"});
    res.end("Hello from the Node server!");
    visits++;
    console.log("Visited : " , visits);
})

const PORT = 5000;

server.listen(PORT , ()=>{
    console.log(`Server started....listening at PORT ${PORT}`);
})