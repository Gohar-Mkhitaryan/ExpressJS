import express from "express";

const app = express();


app.use(express.static("public"));

app.use(express.json());
app.get("/", (req, res)=>{
    req.redirect("/index.html");
});
app.get("/hello", (req, res)=>{
    res.send("It is fine!!!");
});
app.get("/bye", (req, res)=>{
   res.send({
    name: " Ann"
   });
    
});
app.post("/hi", (req, res)=>{
    console.log(req.body.name);
    res.send('It is OK');
});

app.put("/hi", (req, res)=>{
    res.send(console.log('Got a PUT request at /hi'));
});


app.put("/hello", (req, res)=>{
    res.send({
        name: "Eva",
        age: 25
    });
});
app.delete("/hi", (req, res)=>{
    res.send(console.log('Got a DELETE request at /hi'));
});
app.delete("/hello", (req, res)=>{
    res.send({
        color: "Blue"
        
    });
});
app.listen(3001);