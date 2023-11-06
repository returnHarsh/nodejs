//  here we are designing the reat api

const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json")
const fs = require("fs");

app.use(express.urlencoded({extended : false}));
app.use(express.json());

const PORT = 3000;

app.get("/" , (req , res)=>{
    res.send("welcome");
})

app.get("/users" , (req , res)=>{
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

// REST API
app.get("/api/users" , (req , res)=>{
    return res.json(users);
})

// getting user by user id
app.get("/api/users/:id" , (req , res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>{
        return user.id === id;
    })
    return res.send(user);
})

app.post("/api/users" , (req ,res)=>{
    //  todo: create new user
    console.log(req.body);
    const body = req.body;
    users.push({ id : users.length, ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users) , (err , data)=>{
        console.log("success , data pushed in file");
    })
    res.send("data sended");
})


app.delete("/api/users" , (req ,res)=>{
    //  todo: delete the user with id
    const body = req.body;
    const  newUsers = users.filter((user)=>{
        return user.id != body.id
    })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers) , (err , data)=>{
        console.log("success , data pushed in file");
    })
     res.send("delete request is called")
})

app.listen(PORT , ()=>{
    console.log("server online");
})