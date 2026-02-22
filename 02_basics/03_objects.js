//singleton is made using constructor but not by literals

//object literals
const JsUser={
    name:"Hitesh",
    age:45,
    location:"deharadun",
    lastLoginDays:["Monday","saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);

//-------------------------------------------------
const tinderUser=new Object()
tinderUser.id="123abs";
tinderUser.name="purva"
tinderUser.age=20;
tinderUser.email="purvaaapundir@gmail.com"

console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"purva",
            lastname:"pundir",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser));//gives output in array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor}=course
// console.log(courseInstructor)
console.log(instructor)


