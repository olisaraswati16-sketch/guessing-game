
const input = require("readline-sync");

// Taking first player information
let name1 = input.question("Enter first player name: ");
let num1 = Number(input.question("Enter your number: "));

// Taking second player information
let name2 = input.question("Enter second player name: ");
let num2 = Number(input.question("Enter your number: "));

while (true) {
    // Player one guessing
    let guess1 = Number(input.question(`${name1}, guess the number: `));
    if (guess1 === num2) {
        console.log(`${name1} is the winner!`);
        break;
    } else if (guess1 < num2) {
        console.log("Hint: Higher");
    } else {
        console.log("Hint: Lower");
    }

    // Player two guessing
    let guess2 = Number(input.question(`${name2}, guess the number: `));
    if (guess2 === num1) {
        console.log(`${name2} is the winner!`);
        break;
    } else if (guess2 < num1) {
        console.log("Hint: Higher");
    } else {
        console.log("Hint: Lower");
    }
}
