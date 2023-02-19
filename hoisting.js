// In hoisting what happens in the declaration of variables moved up at tthe top of the fonction
// And likewise variable hoisting there is also called function hoisting


function abc(){
    console.log(i);
    var i=10;
}

abc();




// hoisted();

function hoisted(){
   console.log("Hoisted");
}