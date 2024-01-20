let score="33abc"

console.log(typeof score)//string
console.log(typeof(score))//string

let value=Number(score)
/*
In this way we can typecast into other data types
Number, Boolean, String, etc.
*/

console.log(typeof value)//number
console.log(value)// NaN (NOT A NUMBER)



// *********** Operations ******************
console.log(3**4)//power

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32 here we first add initial values and then add string

