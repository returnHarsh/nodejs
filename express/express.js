const express = require("express");
const app = express();

app.get("/" , (req , res)=>{
    res.send("hello world");
})

app.get ("/about" , (req , res)=>{
    
    //  now whatever query you enter in url , now you get that query in "req" and you can access it from "req.query"
    console.log(req.query);
    res.send("about page");
})

app.listen(3000 , ()=>{
    console.log("server online");
})