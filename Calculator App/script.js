var num1=0;
var num2=null;
var operator=null

var display = document.getElementById("display");
var btns = document.getElementsByClassName("button");

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
     var value = this.getAttribute('data-value');
     if(value == '+'){
       operator = '+' ;
       operand1 = display.innerText;
     }
     else if(value== '='){

     }else{
        display.innerText += value;
     }
     
    });
}