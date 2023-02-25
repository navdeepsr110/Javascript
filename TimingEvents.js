//SetTimeout:----------------------

/*function sayHello(){
    console.log("Hello");
}*/

//Here we should make sure tha we should pass function as argument using function name
// setTimeout(sayHello, 5000);

//SetInterval and CLearInterval:------------------------
/*var sec=1;
function sayHello(){
    console.log("after", sec);
    sec++;
    if(sec==6){
        //Stop
        clearInterval(id);
    }
}

var id = setInterval(sayHello, 2000);*/


//Task to coundown timer
var sec=10;
function time(){
    console.log("after", sec);
    sec--;
    if(sec==0){
        //Stop
        clearInterval(id);
    }
}

var id = setInterval(time, 1000);