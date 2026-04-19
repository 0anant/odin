const express = require("express");
const app = express();

app.get('/' ,function(req, res){
    res.send('Hello, WOrld');
})
app.post('/', function(req, res){
    res.send('I will post this on dB');
})

app.put('/', function(req, res){
    res.send('I will put it on Db');
})

app.update('/', function(req, res){
    res.send("i will update the last post");
})

app.listen(3000);