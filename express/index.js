const express = require("express");
const app = express();

app.use(express.json());

let users = [{
    username:"username",
    password:"password",
    token: "token"
}]

app.post('/signing_up', function(req, res){
    const username = req.query.username;
    const password = req.query.password;

})

app.post('/signing_in', function(req,res){
    const username = req.query.username;
    const password = req.query.password;

})

app.listen(3000);