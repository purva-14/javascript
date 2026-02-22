//Immediately Invoked Function Expression

(function chai(){ //named iife
    console.log(`DB CONNECTED`)
})();
//to end this we require semicolon
//to resist global scope pollution we iife


(()=>{
    console.log('db connected')
})()
