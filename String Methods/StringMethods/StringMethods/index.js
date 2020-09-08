function capilizeAndLowercase(h){
var uppercased = h.toUpperCase()
var lowercased = h.toLowerCase()
console.log(uppercased)
console.log(lowercased)
console.log(uppercased+lowercased)
}
capilizeAndLowercase("Hello")

function findMiddleIndex(a){
    var findMiddleIndex = Math.floor(a.length/2)
    console.log(findMiddleIndex)
}
findMiddleIndex("Hello")

function returnFirstHalf(a) {
    var returnFirstHalf = a.slice(0, a.length/2)
    console.log (returnFirstHalf)
    
}
returnFirstHalf("Hello")

function capilizeAndLowercase(a) {
    if (a.length%2===0){
        var capilizeAndLowercase = a.toLowerCase()
        var capilizeAndUppercase = a.toUpperCase()
        
      console.log(a)  
    }
}
capilizeAndLowercase("Hello")



//Array Method Exercise
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercises(){
    vegetables.pop();
    console.log("Vegetables Array Snap Shot:" + vegetables);
    //Arrays #2: Remove the first item from the fruit array.
    fruit.shift();
    console.log("Fruits Array Snap Shot:" + fruit);
}

console.log(arrayExercises());

//Final Output should be as follows:
//3, pepper, 1, watermelon, orange, apple