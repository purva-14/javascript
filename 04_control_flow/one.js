//if
const isUserLoggedIn=true;
if(isUserLoggedIn){

}
//implicit scope
if(balance>500) console.log("test")

//truthy values
const userEmail="h@hitesh.com"
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have a user email")
}
//the vlaue is given hence if condition will run

//faslsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//REST ALL ARE TRUTHY VALUES;
//"0",'false' ," ",[],{},function(){}->TRUTHY VALUES

if(userEmail.length===0){
    console.log("Array is empty")
}

const emptyObj={

}
if(Object.keys(emptyObj).length===0){
    console.log("the object is empty")
}

//false==0->true;
//false=''->true;
