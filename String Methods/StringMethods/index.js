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
capilizeAndLowercase("Helloc")