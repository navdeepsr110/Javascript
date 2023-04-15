// var box = document.getElementById('box');
// var clickCount=document.getElementById('click-count');

// var sec=0;
// function time(){
//     console.log(sec);
//     sec++;
//     if(sec==10){
//         //Stop
//         clearInterval(id);
//     }
// }

// var id = setInterval(time, 1000);

var current = document.querySelector('.current');
var next = document.querySelector('.next');

function startCounter(){
    var interval = setInterval(animate,1000);
}

function animate(){
    next.classList.add('animate');
    setTimeout(function(){
        next.classList.remove('animate');
    }, 500);
}