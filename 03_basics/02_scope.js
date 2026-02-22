
let a=30;
if(true){
 let a=10;
const b=20;//both let and const in block scoped
var c=30;

console.log(a);

}
// console.log(a)
// console.log(b)
console.log(c)//hence this is global scoped
//-------------------------------------------------
function one(){
    const username="hitesh";

    function two(){
        const website="utube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

// if(true){
//     const username="hitesh"
//     if(username==="hitesh"){
//         const website="youtuble"
//     }
// console.log(website)
// }
// console.log(username)
//will give an error because we are excessing it out of the scope
