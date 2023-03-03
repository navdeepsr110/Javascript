var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('mouseover', function(){
    console.log('Mouse Over');
});
outerDiv.addEventListener('mouseout', function(){
    console.log('Mouse Out');
});

var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress', function(){
//        console.log('Key Pressed');
// });

// document.addEventListener('keypress', function(){
//     console.log('Key Pressed');
// });

document.addEventListener('keydown', function(event){
     console.log('Key Pressed', event.keyCode);
});



// document.addEventListener('keyup', function(){
//      console.log('Key Released');
// });