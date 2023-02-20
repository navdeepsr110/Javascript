var arr = [2,3,4,5,6,7];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// We can also pass arguments specigying more things here
// function print(element,index,size){
//     console.log(element);
// }
function print(element){
    console.log(element);
}

arr.forEach(print);