// Chapter 2
// Q1
// let age = prompt("What is your age?"); //prompt will not work in nodejs so run it in console
if(age>10 && age<20){
    console.log("Yes");
}
else{
    console.log("NO");
}
//Q2
// Demonstrating the use of switch case 
let age = prompt("What is your age?");
age = Number.parseInt(age)
switch(age){
    case 1:
        console.log("Your age is 1"); break;
    case 2:
        console.log("Your age is 2"); break;
    case 3:
        console.log("Your age is 3"); break;
    default:
        console.log("Your age is not special"); break;
}
// Q3
let num = prompt("Enter the number");
if(num%2==0){
    console.log("Divisible by 2");
} 
else if(num%3==0){
    console.log("Divisible by 3");
}
// Q4
