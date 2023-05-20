var var1 = 10;
function outer(){
    var b=40;
    console.log(b);
}
console.log(var1);
console.log(window.var1);
window.outer();

// Scopes
var a=10;

function outer(){
    var a = 20;
    var b = 40;
    function inner(){
        var a = 100;
        console.log("Inner", a, b);
    }
    inner();
    console.log("Outer", a, b);
}
outer();
console.log("Global");