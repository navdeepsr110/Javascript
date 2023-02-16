// console.log("Hello World")

// for(let i=0;i<=10;i++){
//    console.log(i);
// }

function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

// generatePyramid();
function starpyramid(){
    var n=5;
    var output='';
    for(var i=0;i<n;i++){
        for(var j=0;j<=i;j++){
           output+="*" + ' ';
        }
        output+='\n';
    }
    console.log(output);
    output='';
}

// starpyramid();

let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);