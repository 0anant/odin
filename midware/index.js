const express = require("express");
const app = express();

function firstMiddlewear(req,res,next){
    const age  = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"Sorry you are not of Age!!"
        });
    }
} 

app.get('/ride2', firstMiddlewear, function(req, res){
    res.json({
        msg: "You have riden ride2 on your side."
    })
})

app.get('/ride1',firstMiddlewear,  function(req, res){
    res.json({
        msg: "You have riden ride1 on your side."
    })
});

app.listen(3000);