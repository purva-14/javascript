//for in loop
const myobj={
    'game':"NFS",
    'game2':"spiderman"
}
// for(const key in myobj){
//     console.log(key);
// }
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
//for each loop

const coding=["js","ruby","java","c++"];

coding.forEach(function(item){
    console.log(item)
})
//using in objects
const mycoding=[
    {
        languageName:"python",
        languagefileName:"py"
    },
     {
        languageName:"java",
        languagefileName:"java"
    }, {
        languageName:"javascript",
        languagefileName:"js"
    }
]
mycoding.forEach((item)=>{
console.log(item.languageName)
})