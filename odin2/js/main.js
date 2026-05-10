const arrEvens = [1,2,3,4,5];
const reduceEvens = arrEvens.reduce((total, currentVal) => {
    if(currentVal%2 == 0){
        total += currentVal;
    }
    return total;
},0);
console.log(reduceEvens);

// map() method - it expects a callback as an argument "i want you to pass another function as an agrument to my function."
function addOne(num){
    return num + 1;
}

const arr_1 = [1,2,3,4,5];
const mappedArr = arr_1.map(addOne);
console.log(mappedArr);// map returns a new array and does not change the orginal one.

//but we can do even better since we're not using addOne anywhere else and it's a simple function, we can define it inline using an arrow function, right inside of map like this;

const arr_2 = [0,0,0,0,0];
const mappedArr_1 = arr_1.map((num) => num + 1);
const mappedArr_2 = arr_2.map((num) => num + 1);
console.log(mappedArr_1);
console.log(mappedArr_2);

//the filter method --  filter is somewhat similar to map. it still iterates over the array and applies the callback function on every item. however, instead of transforming the value in the array, it returns a new array where each item is only included if the callback function returns true for it.

function isOdd(num){
    if (num % 2 !== 0){
        return true;
    }else{
        return false;
    }
}
const filter_1 = arr_1.filter(isOdd);
console.log(arr_1);
console.log(filter_1);

//the reduce method() -- julst like .map() and .filter() , it expects a callback function. the callback function takes 2 arguments instead of one. the first argument is the accumulator, which is the current value of the result at that point in the loop, the first time through, this value will either set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. the second argument for the callback is the cuurent value , which is the item currently being iterated on.

//reduce itself also takes in the initial value as an optional scond argument, which helps when we dont want our initial value to be the first element in the array.


const array1 = [1,2,3,4,5];
const productOfArr = array1.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfArr);
console.log(array1);

const  sumOfArr = array1.reduce((total , currentItem) => {
    return total + (currentItem*2);
},1);
console.log(sumOfArr);

function sumofTripleEvens(array1){
    
    return array1
        .filter((num) => num % 2 == 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr)
        
}
const sumofEvens = sumofTripleEvens(arr_1);
console.log(sumofEvens);