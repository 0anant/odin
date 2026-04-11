// function sum(a,b){
//     return a + b;
// };
// let ans  =  sum(4,6);
// console.log(ans);

// function sum(n){
//     let ans = 0;
//     for (let i = 1; i<=n ;i++){
//         ans = ans+i;
//     }
//     return ans;
// }

function sum(n){
    let ans = 0;
    ans = [n * ( n +1) ] / 2;
    return ans;
}

const ans = sum(10);
console.log(ans);