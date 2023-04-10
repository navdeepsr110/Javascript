var num1=0;
var num2=null;
var operator=null;

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){

     var value = this.getAttribute('data-value');
     var text = display.textContent.trim();

     if(value == '+' || value=='-' || value=='*' || value=='/'){ // is an operator is clicked
       operator = value ;
       num1 = parseFloat(display.textContent);
       display.textContent="";
     }
     else if(value=='ac'){
      display.textContent="";
     }
     else if(value=='sign'){
      num1=parseFloat(text);
      num1 *= -1;
      display.textContent=num1;
     }
     else if(value=='.'){
       if(text.length && !text.includes('.')){
          display.textContent=text + '.';
       }
     }
     else if(value=='%'){
      num1=parseFloat(text);
      num1/=100;
      display.textContent=num1;
     }
     else if(value == '='){
      num2 = parseFloat(text);
      var result = eval(num1 + ' ' + operator + ' ' + num2);
      if(result){
        display.textContent = result;
        num1 = result;
        num2 = null;
        operator=null;
      }
      // use eval to get result
      // show result on display
     }else{
        display.textContent += value;
        // document.getElementById("display").innerHTML=display;
     }
    
    });
}

// calculator logic javascript? 