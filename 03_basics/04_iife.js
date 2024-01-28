// Immediately Invoked Function Expressions (IIFE)

(function greet(){
    console.log(`Hello dear`);
})();//we are executing function in place
// semicolon is compulsory to add.....

// Syntax ()()
// first parantheses for function declaration and second for execution     

// exact use
var a;
console.log(a); // undefined

((num)=> {
    var a = 5;
    console.log(a+num); // 10
})(5);

console.log(a); // undefined