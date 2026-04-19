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

// // app.update('/', function(req, res){
// //     res.send("i will update the last post");
// })
function calculateSum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
app.get('/sum', function(req, res){
    const n =req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})
