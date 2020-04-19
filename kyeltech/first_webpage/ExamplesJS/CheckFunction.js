
//start the function
function oneNumber(param){

    //create an array
    var array = [];
    //begin the loop
    for(i=1; i <= param; i++){
        //detect values divisble by 2,  3 and 5
        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            //push to the array
            // array.push(i);
            array.push('yu')
        }
        // detect value divisible 2
        else if(1 % 2 === 0){
            // array.push(i)
            array.push('gi')
        }
        //detect values divisible by 3
         else if(i % 3 === 0){
            //  array.push(i);
            array.push('oh')
         }
        // //detect values divisible by 5
         else if(i % 5 === 0){
             array.push(i);
        }
    }
    //print array
    console.log(array);
}

//call function
oneNumber(10);



// function wordInString(s, words, replacement){ 
//   var re = new RegExp( '\\b' + words.join('|') + '\\b','gi');
//   return s.replace(re, replacement);
// }

// // usage:
// var str = 'did you, or did you not, get why?';
// str = wordInString(str, ['YOU', 'get'], 'XXX');

// console.log(str);