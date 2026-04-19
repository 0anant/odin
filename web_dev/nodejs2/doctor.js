const express = require("express");
const app = express();

var users = [{
    name: 'Jhon',
    kidneys: [{
        healthy: false},
        {
        healthy: true
        
    }]
}];

app.use(express.json());

app.get('/', function(req,res){
    const jhonKidneys = users[0].kidneys;
    const numberOfkidnneys = jhonKidneys.length;
    let numberOfhealthykidneys = 0;
    for(let i =0; i< jhonKidneys.length; i++){
        if(jhonKidneys[i].healthy){
            numberOfhealthykidneys = numberOfhealthykidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = jhonKidneys - numberOfhealthykidneys;
    res.json({
        jhonKidneys,
        numberOfhealthykidneys,
        numberOfUnhealthyKidneys
    })
});

app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json("msg : done!");
})

app.listen(3000);