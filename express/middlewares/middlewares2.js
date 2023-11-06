const express = require("express");
const app = express();

//  global middleware , in the global middleware i am storing a value in variable "userName" in my "req"
//  the that "userName" is globally available on every req on every routes
app.use((req , res , next)=>{
    req.userName = "Harsh";
    next();
})


app.get("/" , (req , res)=>{
    console.log("home route and the user name is " + req.userName);
    res.send("home route")
})

app.get("/about" , (req , res)=>{
    console.log("about route and the user name is " + req.userName);
    res.send("about route");
})

app.get("/contact" , (req ,res)=>{
    console.log("contact route and the user name is " + req.userName);
    res.send("contact route");
})

app.listen(3000 , ()=>{
    console.log("server online");
})