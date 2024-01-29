// problem with for each loop
// callback function inside the for each loop, if it returns something then we cannot store and use it.

const arr=[1,2,3,4,5,6,7,8,9,10];

const newArr=arr.filter((item)=>{
    return item>4;//in filter, it returns every item that satisfies the condition
})
console.log(newArr);//[ 5, 6, 7, 8, 9, 10 ]

const newArr2=arr.filter((item)=>item%2==0)//we just have to write condition
console.log(newArr2);//[ 2, 4, 6, 8, 10 ]

//++++++++++++++++ map function on arrays +++++++++++++

const newArr3=arr.map((item)=>{
    return item+10;
})

console.log(newArr3);//[11, 12, 13, 14, 15,16, 17, 18, 19, 20]
console.log(arr);//[1, 2, 3, 4,  5,6, 7, 8, 9, 10]

const newArr4=arr.map((item)=>{
    item+=10;
})

console.log(newArr4);//[undefined,undefined,...10 times] as map should return something on each iteration
console.log(arr);//[1, 2, 3, 4,  5,6, 7, 8, 9, 10] original array do not change that means item contains a shallow copy

const newArr5=arr.map((item)=>{
    return item*10;
}).map((item)=>{
    return item+1;
})

console.log(newArr5);//[11, 21, 31, 41,  51, 61, 71, 81, 91, 101]

//  Don't read about reduce function...