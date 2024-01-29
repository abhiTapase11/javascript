// basic if else same as c++

// comparision operators mostly same as c++
// === this is strictly equal to. It checks the value as well as data type


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values that may surprise
// "0", 'false', " ", [], {}, function(){}

// for checking empty array
const arr=[];
if(arr.length==0){
    console.log("array is empty");
}


// for checking empty object
// firstly get the array of keys in that object
const user={};
if(Object.keys(user).length==0){
    console.log("object is empty");
}

if(false==0){// it will evaluate to true
    // In fact, we can compare any two false values and it will evaluate to true
    // eg. false=='', 0=="",....
    console.log("yes");
}


// Nullish Coalescing Operator ( ?? )
// it checks for first value, and if the first value is "null/undefined" it will assign second value
let val;
val=5??10;
console.log(val);//5
val=null??10;
console.log(val);//10
val=undefined??15;
console.log(val);//15
val=null??undefined??20;
console.log(val);//20

// ternary operator is same as c++