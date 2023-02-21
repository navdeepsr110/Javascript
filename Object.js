// var student = {
//     "name": "abc",
//     rollNo: 135,
//     marks: 90,
// };


var student = {
    "-name": "abc",
    rollNo: 135,
    marks: 90,
};

// console.log(student);

// we cannot write name like this
// So Here it gives an error
// console.log(student.-name);
// Square bracket notation
console.log(student["-name"]);