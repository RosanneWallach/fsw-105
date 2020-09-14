var readlineSync = require(`readline-sync`);

//Ask the player his/her name
const playerName = readlineSync.question("May I have your name please?");

const welcomeMessage = `Welcome ${playerName} to the Escape Room Simulation Game!`;
console.log(welcomeMessage);


// console.log(menuOptions);

let isAlive = true;
let alreadyHasKey = false;

while (isAlive == true)
{
    const menuOptions = readlineSync.keyIn(`Press 1 for Put Hand in Hole \n Press 2 for Find the key \n Press 3 for Open the door`,{limit: `$<1-3>`});
    if (menuOptions == 1)
    {
    //Put Hand in the Hole
    //Player Dies
    //Terminate the Game
    console.log(`Oh No! You put your hand in the hole! Your are DEAD! Sorry, Game is Over.`)
    isAlive = false;
    }

    else if (menuOptions == 2 && alreadyHasKey == false)
    {
        //Find the Key but the player did NOT have the key to begin with
        console.log(`${playerName}, you FOUND the key....continue with the Game!`);
        alreadyHasKey = true;
    }
    else if (menuOptions == 2 && alreadyHasKey == true)
    {
        //Find the Key and the player ALREADY has the key
        console.log(`${playerName}, you ALREADY have the key....Try a different menu option!`);
    }
    else if (menuOptions == 3 && alreadyHasKey == false)
    {
        //Open the Door, Player DOES NOT have the key
        console.log(`${playerName}, you SUCCESSFULLY found the key....Insert the key in the lock!`);
        alreadyHasKey = true;
    }
    
    else if (menuOptions == 3 && alreadyHasKey == true)
    {
        //Open the door, Player HAS the key
        console.log(`${playerName}, you ALREADY have the key....You successfully inserted the key in the lock!`);
        isAlive = false;
    }
    
    
    
}