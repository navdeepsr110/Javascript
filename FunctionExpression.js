//Function Expression
// Assigning a function


// Function Expression
/*var factorial = function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
};*/

/*var factorial2 = function (n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
};*/

/*console.log(factorial);
console.log(factorial2);*/

// console.log(factorial);
// console.log(factorial(5));

// I cannot use the function fact here by name like this:
// console.log(fact(4))


//Function declaration 
/*function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans = ans * i;
    }
    return ans;
}*/

console.log(fact(5));
console.log(factorial);

function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}

// Everything Conceptually is value in javascript so function expression becomes handy
var factorial = function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
};