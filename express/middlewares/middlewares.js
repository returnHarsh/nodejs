const express = require("express");
const app = express();

app.use(express.urlencoded({extended : false}));
app.use(express.json());

const middle = (req , res, next)=>{
    console.log(`hello ${req.body.name} welcome in first middleware`);
    next();
}

app.get("/" , (req , res)=>{
    res.send("home page get request");
})

app.post("/" , (middle) , (req , res)=>{
    res.send("home page post request");
})


app.listen(3000 , ()=>{
    console.log("serer online");
})