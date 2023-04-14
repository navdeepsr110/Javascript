var sec=0;
function time(){
    console.log(sec);
    sec++;
    if(sec==10){
        //Stop
        clearInterval(id);
    }
}

var id = setInterval(time, 1000);