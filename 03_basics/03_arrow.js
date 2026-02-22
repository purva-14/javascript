const user={
    username:"purva",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`)
    }
    
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)

// function one(){
//     console.log(this); //this cant be used in a function
// }
// one();

const chai=()=>{
    let username="purva"
    console.log(this)
}

//implicit return 
// const sum=(num1,num2)=>num1+num2
const sum=(num1,num2)=>(num1+num2) //another way to do it
const obj=(num1,num2)=>({username:"purva"}) ///to return an obj

console.log(sum(4,5))