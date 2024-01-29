// for,while,do-while
// same as c++


// Array specific loops


// 1. for of
const arr=[1,2,3,4,5];
for (const it of arr) {
    console.log(it);
}

const s="abhi";
for (const it of s) {
    console.log(it);
}


// Map
// key value pairs, not sorted, unique pairs
// eg.

const mp=new Map();
mp.set("IN","India");
mp.set("USA","United States of America");
mp.set("FR","France");
mp.set("IN","India");

console.log(mp);//map with three entries

mp.set("IN","Mumbai");//changes value of key "IN"
console.log(mp);

mp.set(90,"abc");//we can push any data type
console.log(mp);

for (const it of mp) {
    console.log(it);//every it is array of size 2(key and value)
}

// we can destructer every array we are getting above
for (const [a,b] of mp) {
    console.log(a+" => "+b);
}

// "-----we cannot use for of loop to iterate in object----"

// for in loop (for objects)

const user={
    name:"abhi",
    age:22,
    place:"latur"
}

for (const key in user) {
    console.log(`${key} is ${user[key]}`);
    // if we cannot write user.key
    // reason: key is a string and user do not identify it as its property
}

// for in loop can also be used for arrays


// For each loop
const coding=['js','py',"cpp",'rb'];

coding.forEach(function(item){//its a callback function. It do not have name.
    console.log(item);//every item in array
})

coding.forEach((item)=>{
    console.log(item);//same as above
})

function print(item){
    console.log(item);
}

coding.forEach(print);//again same

coding.forEach((item,idx,arr)=>{
    console.log(item,idx,arr);
    // eg => cpp 2 [ 'js', 'py', 'cpp', 'rb' ]
})

const students=[
    {
        name:"abhi",
        age:22
    },
    {
        name:"arun",
        age:20
    },
    {
        name:"hardin",
        age:27
    }
];

students.forEach((item)=>{
    console.log(item.age);
})

// for each loop do not return anything