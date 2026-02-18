const myarr=[0,1,2,3,4,6]
// const myarr=[0,1,2,3,4,6,"purva",false]
//arrays are resizable 


// console.log(arr[0])
// //arrays methods 
// myarr.push(6)
// myarr.push(9)
// myarr.pop(6)

// myarr.unshift(8) //add elements at the start
// myarr.shift() //deletes elements at the start
// console.log(myarr.includes(9)); //boolean result
// console.log(myarr)

//slice and splice

console.log("A",myarr)
const myn1=myarr.slice(1,3)//last index not included
console.log(myn1)
console.log("B",myarr)

const myn2=myarr.splice(1,3)//last index not included
console.log(myn2)//last index is included 
console.log("C",myarr) //splice manipulates the original array
