const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req , res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);
    res.end(`path name is ${myUrl.pathname} and query name is ${myUrl.query.name} and age is ${myUrl.query.age}`);
})


server.listen(3000 , ()=>{
    console.log("server online");
})