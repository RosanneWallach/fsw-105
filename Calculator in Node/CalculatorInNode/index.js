const readlineSync = require("readline-sync")
// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');




function operation(){
   let index = readlineSync.question("Select an operation")
   if (index==="add"){
       add()
   }
   else if(index==="sub"){
       sub()
   }
   else if(index==="mul"){
       mul()

   }
   else if(index==="div"){
       div()

   }
}

operation()








function add(a,b){
    a=readlineSync.question("Input1: ") 
    b=readlineSync.question("Input2: ")
    var number = Number(a)+Number(b)
     console.log (`YourResultIs${number}`)
}


function sub(a,b){
    a=readlineSync.question("Input1: ")
    b=readlineSync.question("Input2: ")
    var number = Number(a)-Number(b)
    console.log (`YourResultIs${number}`)
}


function mul(a,b){
    a=readlineSync.question("Input1: ")
    b=readlineSync.question("Input2: ")
    var number = Number(a)*Number(b)
    console.log (`YourResultIs${number}`)
}


function div(a,b){
a=readlineSync.question("Input1: ")
b=readlineSync.question("Input2: ")
var number = Number(a)/Number(b)
console.log (`YourResultIs${number}`)
}

