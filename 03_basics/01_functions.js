  function greet(name){
    return `Hello ${name}`
  }

console.log(greet("abhi"));//Hello abhi
console.log(greet(""));//Hello
console.log(greet());//Hello undefined
// as we have not defined any value for name

function view(...num1){
  return num1;
}

console.log(view(3,50,837,9000));//[ 3, 50, 837, 9000 ]

function view2(val1,val2,...num1){
  return num1;
}

console.log(view2(3,50,837,9000));//[ 837, 9000 ] as val1=3,val2=50 and rest is in num1
