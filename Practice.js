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

// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
  // printing star
  // for (let j = 0; j < i; j++) {
  //   if(i === n) {
  //     string += "*";
  //   }
  //   else {
  //     if (j == 0 || j == i - 1) {
  //       string += "*";
  //     }
  //     else {
  //       string += " ";
  //     }
  //   }
  // }
  // string += "\n";
// }
// console.log(string);

// javascript function to calculate prime number ?
// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
//         if(num % i === 0) return false;
//     }
//     return num > 1;
// }






// javascript function to print fibonacci series ?
var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}





