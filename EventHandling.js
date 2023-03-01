
function sayHello(){
    alert('Hello');
}
function sayBye(){
    alert('Byee!!');
}

var helloButton = document.getElementById('btn2');
helloButton.addEventListener('click',sayHello);
helloButton.addEventListener('click',sayBye);

/*var helloButton2 =  document.getElementById('btn2');
console.log(helloButton2);

helloButton2.addEventListener('click', function(){
    alert('Hello');
});*/


//Event Handling ?
dialogWindow.unload = myEventHandler;


var oldHandler = dialogWindow.unload;
dialogWindow.unload = function (e) 
{
   if (oldHandler) { oldHandler(e); }
   myEventHandler(e);
}








