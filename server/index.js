const fs = require("fs");
const http = require("http");

const server = http.createServer((req , res)=>{
    const log = `${Date.now()}: ${req.url} New Req Recieved \n`;
    fs.appendFile("log.txt" , log , (err , data)=>{
        switch(req.url){
            case '/' : res.end("Home Page");
            break;
            case '/about' : res.end("hello this is superman");
            break;
            case '/contact' : res.end("you can't")
            break;
            case '/joke' : res.end("ha ha");
        }
    });
})

server.listen(3000 , ()=>{
    console.log("server online");
})