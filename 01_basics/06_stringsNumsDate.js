// STRINGS
let str1="abcd";
let str2=new String("abhi");

console.log(typeof str1);//string 
console.log(typeof str2);//object

// we have so many inbuilt functions on strings
// we'll learn them in use

// NUMBERS
let num=245;
let n=new Number(35);

// Some important functions on numbers
num=245.985;
console.log(num.toFixed(2));//245.99 (round off to 2 digits)
console.log(num.toPrecision(2));//2.5e+2 (it is printing only two values i.e., 2.5)
// and so on

// MATH
let mt=Math.random();//generates value in range [0,1)
// we have functions like
// floor and ceil
// round,etc.
mt=2456.8653;
console.log(Math.round(mt));//2457

// DATE
let myDate=new Date();
console.log(myDate);

// we have many functions on this variable
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getMonth());


console.log(myDate.getTime());// Time stamp
// this is very important in terms ordering
// it gives some integer value using which we can compare two dates or times

// it can be explored more