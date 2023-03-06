// We can apply strict mode to the whole document using declaring it here  
// "use strict";

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count=0;
box.addEventListener('click', function(){
    // We can also use strict mode in the function
    // "use strict";
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});