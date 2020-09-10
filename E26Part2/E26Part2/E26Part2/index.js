//Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned.) You only need to delete var and insert let and const. John is the pet owner, and his name should be stored differently than the other names.

let manName = "John";
let age = 101;
let name = "";
function runForLoop(pets) {
  const petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", manName);
  return petObjects;
}
runForLoop(["cat", "dog"]);
console.log(".................");
//2) Re-write this .map() using an arrow function:
//Be aware that is Javascript sees a directly are the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map((carrot) => {
    return { type: "carrot", name: carrot };
  });
}
console.log(mapVegetables([carrots]));
console.log(".......................");

//3) Re-write this .filter() using an arrow function:
const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Browser",
    friendly: false,
  },
];
function filterForFriendly(arr) {
  return arr.filter((person) => {
    return person.friendly;
  });
}
console.log(filterForFriendly(people));
console.log(".................");

//4) Re-write the following functions to be arrow functions:

var doMathSum = (a, b) => {
  return a + b;
};
var produceProduct = (a, b) => {
  return a * b;
};
console.log(doMathSum(2, 2));
console.log(produceProduct(2, 2));
console.log("......................");

//5) Write a printString function that takes firstname, lastname, and age as parameters and returns a string like the following:
//Hi Kat Stark, how does it feel to be 40?
//firstname should default to "Jane"
//lastname should default to be "Doe"
//age should default to 100

let printString = (firstname = "Jane", lastname = "Doe", age = 100) => {
  return "Hi " + firstname + " " + lastname + ", how does it feel to be " + age;
};

console.log(printString("Kat ", "Stark", 40));
console.log(printString());
console.log("....................................");

//6) Use template literals to build the string from #5
let printString2 = (firstname = "Rosanne", lastname = "Wallach", age = 30) => {
  return `Hi ${firstname} ${lastname} how does it feel to be ${age}`;
};
console.log(printString2());
console.log("..................................");

//7) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];
function filterForDogs(arr) {
  return arr.filter((animal) => 
    // if (animal.type === "dog") {
    //   return true;
    // } else {
    //   return false;
    // }
    (animal.type === "dog") ? true : false 
  );
}
console.log(filterForDogs(animals));
console.log("..................................");

//8) Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
//Hi Janice!
//Welcome to Hawaii.
//I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

let printString3 = (name = "Janice", location = "Hawaii") => {
  return `
     Hi ${name}!
     Welcome to ${location}. 
    I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. `;
};
console.log(printString3());
console.log(printString3("Serenity", "Honolulu"))
console.log(".........................................");
