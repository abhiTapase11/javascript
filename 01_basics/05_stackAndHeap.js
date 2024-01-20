// primitive data types
// Number,String,Boolean,etc

// non-primitive(Reference) data types
// Arrays, Objects, Functions

// ************** Memory to data types *******

// Stack
// it stores primitive data type and creates copy everytime we assign it to any other variable
let num=26;
let abc=num;

abc=42
console.log(num);//26 (value not changed)
console.log(abc);//42

// Heap
// it stores non-primitive data types and it gives reference of original data whenever we assign this value to another variable
let user={
    email:"abhi@google.com",
    name:"Abhi"
}
let xyz=user;
xyz.name="Hardin"

console.log(user.name);//Hardin (value is changed)
console.log(xyz.name);//Hardin