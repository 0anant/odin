// Promise class gives u a promise, that we will return something in the future;
// function logName(){
//     console.log("Praveen");
// }

// setTimeout(logName, 3000);
// callback based approach
//prommise based approach
//defining a promise is hard
//using a promise is easy
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve.ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);