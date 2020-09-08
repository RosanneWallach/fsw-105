//Array Filter Exercises
//# .filter() method
//Returns a new array with only the filtered out items from the original array
//Purpose: To reduce a data set into a sub-data set.
//Section-A: Use the built-in array method .filter()
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
//return new array of numbers 5 or greater
//3, 6, 8, 2
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if (num >= 5){
            return true;
        };
    });
    return result;

};

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log(".............");

//Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix(17+).
function ofAge(arr){
     return arr.filter(function(num){
        if (num.age >= 17){
            return num;
        };
    });
    
};
console.log(ofAge([
    { name: "Angeline Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));


//2) Given an array of numbers, return a new array that only includes the even numbers.
//3, 6, 8, 2
function evensOnly(arr){
    const result = arr.filter(function(num){
        if (num % 2 == 0){
            return true;
        };
    });
    return result;

}
console.log(evensOnly([3, 6, 8, 2]));
console.log("............");

//Array Map Exercises
//.map() method
//Returns a new array the same size as the input array
//Purpose is to allow you to take an array of data and create a new array of data from it.
//Section -B: Use the built-in .map() method
//1)Make an array of numbers that doubles of the first array
//2, 5, 100
function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
    };

console.log(doubleNumbers([2, 5, 100]));
console.log("...........");

//2)Take an array of numbers and make them strings
function stringItUp(arr){
    const result = arr.map(function(num){
        return num * 1;
    });
    return result;
};

console.log(stringItUp([2, 5, 100]));
console.log("...........");

//3)Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(function(word){
        var name = word.charAt().toUpperCase()
        var fullname = word.slice(1).toLowerCase()
        return name+fullname 


    });
    
};
console.log(capitalizeNames(["john", "JACOB", "jinGleheimer", "schmid"]));

//Extra Credit 1) Make an array of strings of the names
function namesOnly(arr){
    const result = arr.map(function(namesOnly){
        return namesOnly.name
    });
    return result;
    };

console.log(namesOnly([
    {
        name: "Angeline Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age:100
    }
]));
//Extra Credit 2)Make an array of strings of the names saying whether or not they can go to The Matrix.
function makeStrings(arr){
    const result = arr.map(function(num){
        return canGoToTheMovies
    });
    return result;
    };
}
console.log(makeStrings({
    {
        name: "Angeline Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
}));
//Array Reduce Exercises
//# .reduce() method
//Returns whatever you want it to return
//Purpose is to take an array of data and reduce it into a smaller or completely different data set.
//Section-C: Use the built-in, reduce() method
//1) Turn an array of numbers into a total of all the numbers
function total(arr){
    const result = arr.reduce(function(finalAddition, num){
        finalAddition = finalAddition + num;
        return finalAddition;
    });
    return result;

}
console.log(total([1, 2, 3]));
console.log("..........");

//2) Turn an array of numers into a long string of all those numbers.
function stringConcat(arr) {
    const result = arr.reduce(function(finalAddition, num){
        finalAddition = finalAddition + num;
        return finalAddition;
    });
    return result;
};
console.log(stringConcat([1,2,3]));
console.log("11111111111111")

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr){
    return arr.reduce(function(finalAddition, num){
       if (num.voted){
           finalAddition++

       }
       return finalAddition
    },0);
    
};
var voters = [
    {name:'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}

];
console.log(totalVotes(voters));
console.log("2222222222222222222222")

//Array Reduce Exercises
//#.sort() method
//Returns the array sorted in a manner specified
//Section-D: Use the built-in .sort() method
//1) Sort an array from smallest number to largest
//1, 3, 5, 2, 90, 20
function leastToGreatest(arr) {
    const numbers = arr.sort(function(a, b){
        return a - b;
    });
    return numbers;
}

console.log("Result of an array from smallest number to largest: " + leastToGreatest([1, 3, 5, 2, 90, 20]));
console.log("............");

