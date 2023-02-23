// var student = {
//     "name": "abc",
//     rollNo: 135,
//     marks: 90,
// };


/*var student = {
    "-name": "abc",
    rollNo: 135,
    marks: 90,
};*/

// console.log(student);

// we cannot write name like this
// So Here it gives an error
// console.log(student.-name);
// Square bracket notation
// console.log(student["-name"]);


// Deleting property
/*var student = {
    "name":"abc",
    rollNo: 135,
    marks: 90,
    "2": "two",
};
console.log(student);
delete student.marks;
console.log(student);
delete student.rollNo;
console.log(student);
delete student.name;
console.log(student);*/

// How are objects are stored
var obj = {
    "p1":10
};

var obj2 = obj;
console.log(obj2);
console.log(obj);

console.log(obj==obj2);
console.log(obj===obj2);

// Now if i am giving same value to obj2
obj2={
    "p1":100
};
// It would point to different locations
console.log(obj==obj2);