const fs = require("fs");

fs.readFile("a.txt", "utf-8",function(err, contents){
    console.log(contents);
    console.log("1");
})

fs.readFile("b.txt", "utf-8", function(err, conntents){
    console.log(conntents);
    console.log("2");
})

fs.readFile("c.txt", "utf-8", function(err, contents){
    console.log(contents);
    console.log("3");
})

console.log("Done!");