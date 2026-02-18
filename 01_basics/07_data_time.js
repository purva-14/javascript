//dates
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) //object


//let myCurrentDate=new Date(2026,0,23)
//let myCurrentDate=new Date(2026,0,23,5,3)
let myCurrentDate=new Date("01-23-2026")

console.log(myCurrentDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCurrentDate.getTime())