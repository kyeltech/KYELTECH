let oneNumber = ()=>  {
// create an array 
let arr = [];

// begins the loop
for (let i = 1; arr.length < 100; i++) { 
    // detect values divisible by 2, 3, 5
    if(1 % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        // push to  array and adding any value needed
        arr.push("yu-gi-oh")
        // detect if value are divisible by 3 , 5
        } else if(1 % 3 === 0 && i % 5 === 0){
            // push to  array and adding value
            arr.push("gi-oh")
            // detect if value is divisible by 2, 5 
        } else if(i % 2=== 0 && i % 5 === 0 ){
            // push to  array and adding value
        arr.push("yu-oh");
    }
    // detect if value are divisible by 2 , 3
        else if(i % 2=== 0 && i % 3 ===0){
        arr.push("yu-gi");
        // detect if value are divisible by 2
    } else if(i % 2 === 0 ){
    // push to  array and adding value
        arr.push('yu')
        // detect if value are divisible by 3 
    } else if(i % 3 === 0 ){
    // push to  array and adding value
        arr.push('gi')
        // detect if value are divisible by 5
    } else if(i % 5 === 0 ){
        arr.push('oh')
    // push to  array and adding value
    } else {
        arr.push(i)
    }
}

return arr

}
console.log(oneNumber())