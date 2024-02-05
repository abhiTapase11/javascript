console.log("Abhi")
function abc(){
    let name='abccccc';
    console.log(this);//{Object:[global].......functional executional context}
    console.log(this.name);//undefined
    console.log(name);//abccccc
}
// abc();

const xyz=()=>{
    let name='abccccc';
    console.log(this);//{}
    console.log(this.name);//undefined
    console.log(name);//abccccc
}
// xyz();