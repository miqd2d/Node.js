const http = require("http");

const server = http.createServer((req,res)=>{
    // Get the url and set a response accordingly
    const url = req.url;

    if ( url === "/" ){
        res.writeHead(200 , {"content-type" : "text/plain"});
        res.end("Home Page");
    }
    else if ( url === "/about" ){
        res.writeHead(200 , {"content-type" : "text/plain"});
        res.end("About Page");
    }
    else if ( url === "/downloads" ){
        res.writeHead(200 , {"content-type" : "text/plain"});
        res.end("Downloads Page");
    }
    else {
        res.writeHead(404 , {"content-type" : "text/plain"});
        res.end("Bad Request...Page does not exist");
    }

})

server.listen(5012 , ()=>{
    console.log("Server running at port 5012...")
})