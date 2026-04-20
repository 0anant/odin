const express = require("express");
const app = express();

function mula(a,b){
    return a*b;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

app.get('/multiply', function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const mul = mula(a,b);
    res.json({
        value: mul,
        msg:"multiplied successfully"
    })
})
app.get('/divide', function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const div = divide(a,b);
    res.json({
        value: div,
        msg:"divided successfully"
    })
})
app.get('/subtract', function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const sub = minus(a,b);
    res.json({
        value: sub,
        msg:"subtracted successfully"
    })
})
app.get('/add', function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const sum1 = sum(a,b);
    res.json({
        value: sum1,
        msg:"added successfully"
    })
})



app.listen(3000);