const user={
    name:"abhi",
    age:22,

    greet:function(){
        console.log(this.name+" have a nice day.");// abhi have a nice day.
        console.log(this);// { name: 'abhi', age: 22, greet: [Function: greet] }
    }
}

// user.greet();

console.log(this);//{}  as we are in node environment and this will give us an empty object
// but if we do this in browser's console it will give us window object


// ++++++++ Function declaration types
// 1.
let y=32;
function abc(){
    let x=78;
    // console.log(this);//it gives a global object of node environment
    console.log(this.x);//undefined
    // it means x(or any local variable) is not defined for "this" inside a function
    // DON'T KNOW WHY?
    console.log(this.y);//undefined
    // DON'T KNOW WHY?
}

// abc();

// 2.
const xyz=function(){
    let x=78;
    console.log(this);//again global object as above
    console.log(this.x);//undefined
    console.log(this.y);//undefined
}

// xyz();


// 3. (arrow function)
const func=()=>{
    let x=78;
    console.log(this);//{} empty object
    console.log(this.x);//undefined
    console.log(this.y);//undefined
}

// func();


// different ways to write arrow function
const sum1=(a,b)=>{ return a+b; }//if using curly braces then use return keyword

const sum2=(a,b)=>a+b;

const sum3=(a,b)=>(a+b);//if not using curly braces then no need to use return keyword

