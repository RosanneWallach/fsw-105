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
}

operation()





//How to  convert string to number readlineSync Javascript



function add(a,b){
    a=readlineSync.question("Input1: ") 
    b=readlineSync.question("Input2: ")
    var number = a+b
     console.log (`YourResultIs${number}`)
}

add(1,2)

function sub(a,b){
    a=readlineSync.question("Input1: ")
    b=readlineSync.question("Input2: ")
    var number = a-b
    console.log (`YourResultIs${number}`)
}

sub(3,2)

function mul(a,b){
    a=readlineSync.question("Input1: ")
    b=readlineSync.question("Input2: ")
    var number = a*b
    console.log (`YourResultIs${number}`)
}

mul(5,5)

function div(a,b){
a=readlineSync.question("Input1: ")
b=readlineSync.question("Input2: ")
var number = a/b
console.log (`YourResultIs${number}`)
}

div(20,5)