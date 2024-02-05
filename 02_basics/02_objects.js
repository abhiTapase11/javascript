// singleton
// it is created using Object.create(or using new) like a class instance

// object literals

let mySymbol=Symbol("anything");
const user={
    name:"abhi",
    "full name":"Abhi Tapase",
    age:22,
    [mySymbol]:"vvv",//this is the way of declaring a symbol as key
    location:"Latur",
    email:"abhi@google.com",
    isLogin:false,
    prevLogins:["Mon","Sat"]
}

console.log(user.email);//abhi@google.com
console.log(user["email"]);//abhi@google.com
console.log(user["full name"]);//Abhi Tapase
// this is why accessing key through square brackets is important
// also when we use symbols we also need to use square brackets
console.log(user.mySymbol);//undefined
console.log(user[mySymbol]);//vvv i.e., value corresponding to it

user.age=52;//changes age to 52
// Object.freeze(user);// after this line we cannot change anything of this object
// ex
user.age=22;
console.log(user.age);// it remains 52 as the object is now freezed

// +++++++++ FUNCTIONS ++++++

user.greeting=function(){
    console.log("Hello, I am a function");
}
user.greeting();
console.log(user.greeting)//it will return a function reference
console.log(user.greeting());// it will first execute greeting function
// as we can see greeting fuhnction is not returning anything so 
// console.log will print undefined

const keys=Object.keys(user);
console.log(keys);//keys will be an array

const values=Object.values(user);
console.log(values);//values will be an array

console.log(user.hasOwnProperty("name"));//true

// object destructuring
const {name,age}=user; 
console.log(name,age);//abhi 22
const {location:place}=user;
console.log(place);//Latur

// JSON is just a object with keys and value as a string(if they are just a text)
// this object do not have a name

// API gives us data in JSON format