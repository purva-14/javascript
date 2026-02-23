//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
//break and continue
//break-> breaks out from the loop
//continue->breaks out from the iteration and continue
//from the next iterations
//---------------------------------------
//while loop
let index=0;
while(index<=10){
    console.log(`Value of index is ${index}`)
    index=index+1;
}

// let arr=0;
//----------------------------------------------------------------
//for Of
const arr=[1,2,3,4,5,6,7]
for(const num of arr){
    console.log(num);
}

//Maps
// const map=new Map()
// map.set('In' ,"India")
// map.set('usa',"united states of america")
// console.log(map)

const myobj={
    'game':"NFS",
    'game2':"spiderman"
}
for(const key in myobj){
    console.log(key);
}