const express = require("express");
const app = express();

app.get("/" , (req , res)=>{

    //  good practice , always add X in front of your built-in headers
    //  here setting my custom headers 
    res.setHeader("XmyName" , "Harsh");
    console.log(req.headers);
    res.send("home route");
})

app.listen(3000 , ()=>{
    console.log("server online");
})