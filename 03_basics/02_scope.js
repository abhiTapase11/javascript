if(1){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);//it says 'a' is not defined 
// console.log(b);//it says 'b' is not defined 
console.log(c);//30  

n=200;//it also creates the same problem as var

// ++++ mostly things are same as c++ 

console.log(addOne(5));
function addOne(num){
    return num+1;
}
console.log(addOne(5));

// console.log(addTwo(5)); //ERROR as we cannot access it before intialization 
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(5));

// this thing shows that the functions are hoisted and variable are not hoisted