// console.log("Navdeep Singh Rathore")

// function multiply(a,b){
//     return a*b;
// };
// console.log(multiply);

//Function within Function

// function outer(){
//     var outerVar=10;
//     function inner(){
//         console.log(outerVar);
//     }
//     inner();
// }
// outer();


//Function Declaration
// function fact(n){
//     var ans=1;
//     for(var i=1;i<=n;i++){
//         ans*=i;
//     }
//     return ans;
// };

//Function Expression
// var factorial = function fact(n){
//    var ans=1;
//    for(var i=1;i<=n;i++){
//     ans*=i;
//    }
//    return ans;
// };

// console.log(fact(4)); // we cannot use this function namae outside the function
// console.log(factorial);
// console.log(factorial(5));


var factorial = function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1); 
    // var ans=1;
    // for(var i=1;i<=n;i++){
    //  ans*=i;
    // }
    // return ans;
 };

 var factorial2 = function (n){
    var ans=1;
    for(var i=1;i<=n;i++){
     ans*=i;
    }
    return ans;
 };

 console.log(factorial) 
 console.log(factorial2);
console.log(factorial(5));