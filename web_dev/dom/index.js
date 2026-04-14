// let ctr = 0;
// function callback(){
//     console.log(ctr);
//     ctr++;
// }

// setInterval(callback, 1000);

// callback();
// callback();
// callback();
// callback();
// callback();


let ctr = 0;
function callback(){
    ctr++;
    document.querySelector('h5').innerHTML = ctr;
}

setInterval(callback,1000);