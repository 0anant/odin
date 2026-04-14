const fs = require("fs");

function rad(resolve){

    fs.readFile("a.txt", "utf-8", function(error, data){
        resolve(data);
    });
}

let r = new Promise(rad);

function callback(data){
    console.log(data);
    
}
r.then(callback);