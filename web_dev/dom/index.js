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
    document.querySelectorAll('h4')[1].innerHTML = ctr + '. Go to gym!!';
}

setInterval(callback,1000);