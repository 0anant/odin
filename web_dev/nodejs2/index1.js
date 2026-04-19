const express = require('express');
const app = express();

function calculateSum(a,b){
    let sum = (a+b);
    return sum;
} 

app.get('/', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    let sumAB = calculateSum(a,b);
    res.send(sumAB.toString());
})

app.listen(3001);