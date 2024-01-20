const arr=[];
const arr1=new Array(2,54,"abhs");

/*

// ****************** IMPORTANT DOUBT ***************************
// we daclare an array as const and we can still modify it
// is it not violating meaning of const

// Answer: const prohibits us from reassigning a complete value to a variable
// whereas modification in existing value is allowed

*/



// most of the things are relatable to c++

arr1.unshift("mfjj");// adds "mfjj" in starting
arr1.shift();// removes element from starting

console.log(arr1.includes(54));//true
console.log(arr1.indexOf(54));//1 (1st index)
//these two operations are same in strings

const newArr=arr1.join();//coneverts array to comma seperated string
console.log(newArr);//2,54,abhs (this a complete string so newArr.length=9)

// slice and splice
const x=arr1.slice(1,2);//x will be a copy of range [1,2)

const y=arr1.splice(1,2);//y will be a portion of range[1,2]
// and now this portion will be missing in original array


const p=[1,2,3,4];
const q=[9,5,3];

// p.push(q);//it will add q as next element to array p
// console.log(p);//[ 1, 2, 3, 4, [ 9, 5, 3 ] ]

// const r=p.concat(q);//this returns new array
// console.log(r);

p.push(...q);
console.log(p);//[1, 2, 3, 4, 9, 5, 3]

const s=[...p, ...q];
console.log(s);//concat of p and q

console.log(Array.isArray("abhi"));//false
console.log(Array.from("abhi"));//[ 'a', 'b', 'h', 'i' ]
console.log(Array.of("abhi"));//[ 'abhi' ]
console.log(Array.of("abhi",353,["fsfs",3566,"rgr"]));//[ 'abhi', 353, [ 'fsfs', 3566, 'rgr' ] ]
