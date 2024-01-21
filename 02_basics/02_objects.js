// singleton
// it is created using Object.create like a class instance

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
Object.freeze(user);// after this line we cannot change anything of this object
// ex
user.age=22;
console.log(user.age);// it remains 52 as the object is now freezed
