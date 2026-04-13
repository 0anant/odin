// // Promise class gives u a promise, that we will return something in the future;
// function logName(){
//     console.log("Praveen");
// }

// setTimeout(logName, 3000);
// // callback based approach
// //prommise based approach
// //defining a promise is hard
// //using a promise is easy
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve.ms));
// }
// function callback(){
//     console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback);

// function waitFor3S(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("main is called");
// }

// waitFor3S(main);

function random(resolve){
   setTimeout(resolve, 3000);
     
}
let p = new Promise(random);

function callback(){
    console.log("Promise succeeded");
}
p.then(callback);


const fs = require("fs");
function readfile(resolve){
    fs.readFile("a.txt", "utf-8", resolve(error, data)){
        console.log(data);
    }
}

let r = new Promise(rad);
function callback(){
    console.log("file is read");
}
r.then(callback);