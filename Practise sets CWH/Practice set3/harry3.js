// Q1
let marks = {
    harry:98,
    rohan:70,
    aakash:7,
    ram:5,
    jeev:6
}
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

let a=Object.keys(marks).length;
// console.log(a);

let ans = marks[Object.keys(marks)[0]];
// console.log(ans);
// for(let i=0;i<Object.keys(marks).length;i++){
//   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

//Q2
// Using For in loop

// for(let key in marks){
//     console.log("The marks of " + key + " are " + marks[key]);
// }

// Q3
// let cn = 4;
// let i;
// while(i!=cn){
//     i=prompt("Enter a number");
// }
// console.log("YOu have entered a correct number");

// Q4
// function mean(a,b,c,d) {
//   return (a+b+c+d)/4;
// }
// console.log(mean(3,4,5,6));