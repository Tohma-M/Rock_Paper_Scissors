const max = 3;
var humanScore = 0;
var computerScore = 0;
var humanChoiceNumber = 0; // ask Ryoha. I initialized this, but before this, it said not defined. Why? 
//Scoping issue bc it is declared and defined in get human choice fxn
var computerRandomChoice = 0; 
var message = `You have won ${humanScore} games .The Computer has won ${computerScore} games`; 
var messageComputerWin = `The Computer won ${computerScore} to ${humanScore}!`; 
var messagePlayerWin =`You Won ${humanScore} to ${computerScore}!`; 
var messageTie = `${humanScore} to ${computerScore}. A tie!`; 

// main-ish 

    



    // why does/ did this not work PlayGame(getComputerChoice())? 
var numberOfRounds = parseInt(prompt("How many rounds would you like to play?"));
console.log(numberOfRounds); 
console.log(PlayGame());



function PlayGame () {
    for (i = 0; i <= numberOfRounds; i ++) {
    PlayRound(); 
    console.log(message); 
    if (humanScore > computerScore) {
        console.log (messagePlayerWin); 
    }
    else if (computerScore > humanScore) {
        console.log (messageComputerWin); 
    }
    else {
        console.log (messageTie); 
    }
    }
}


function PlayRound() {
    getHumanChoice (); 
    getComputerChoice(); 
    if (humanChoiceNumber === 0 && computerRandomChoice == 1) {
        computerScore++; 
        console.log ("You lose! Paper beats Rock!");
    }
    else if (humanChoiceNumber === 0 && computerRandomChoice == 2) {
        humanScore++;
        console.log ("You win! Rock beats Scissor!" );
    }
    else if (humanChoiceNumber === 1 && computerRandomChoice == 0) {
        humanScore++; 
        console.log ("You win! Paper beats Rock!");
    }
    else if (humanChoiceNumber === 1 && computerRandomChoice == 2) {
        computerScore++; 
        console.log ("You lose! Scisssor beats Paper ");
    }
    else if (humanChoiceNumber === 2 && computerRandomChoice == 0) {
        computerScore++; 
        console.log ("You lose! Rock beats Scissor!");
    }
     else if (humanChoiceNumber === 2 && computerRandomChoice == 1) {
        humanScore ++; 
        console.log("You win! Scissor beats Paper!");
    }
    else if (computerRandomChoice === 0 && humanChoiceNumber == 1) {
        humanScore++; 
        console.log ("You win! Paper beats Rock");
    }
    else if (computerRandomChoice === 0 && humanChoiceNumber== 2) {
        computerScore++;
        console.log ("You lose! Rock beats Scissor!");
    }
    else if (computerRandomChoice === 1 && humanChoiceNumber == 0) {
        computerScore++; 
        console.log ("You lose! Paper beats Rock!");
    }
    else if (computerRandomChoice === 1 && humanChoiceNumber == 2) {
        humanScore++; 
        console.log ("You win! Scissor beats Paper!"); 
    }
    else if (computerRandomChoice === 2 &&  humanChoiceNumber == 0) {
        humanScore++; 
        console.log("You win! Rock beats Scissor!");
    }
     else if (computerRandomChoice === 2 && humanChoiceNumber == 1) {
        computerScore ++; 
        console.log ("You lose! Scissor beats Paper"); 
    }
    else (humanChoiceNumber === computerRandomChoice) 
        console.log ("tie, go again!");
        PlayRound(); // sus right here
}



   /* This doesn't work. Just repeats the game with the same input.  for (i = 0; i <= numberOfRounds; i++) {
        PlayRound(humanChoiceNumber, computerRandomChoice); 
        console.log (message); 
    } */ 



// functions 
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

// gets random choice between 0 - 2;
function getComputerChoice() {
    computerRandomChoice = getRandom(3);
    return computerRandomChoice;
}

// gets human choice and converts it into a number that can be compared with getComputerChoice. Corrects
// for stringcomp errors by setting all to lowercase. Deal with unnecessary spacing later. 
function getHumanChoice() {
    var human_choice = prompt("Rock, paper, or scissor?");
    var lower_cased_choice = human_choice.toLowerCase();
    if (lower_cased_choice === "rock") {
        humanChoiceNumber = 0;
    }
    else if (lower_cased_choice === "paper") {
        humanChoiceNumber = 1;
    }
    else if (lower_cased_choice === "scissor") {
        humanChoiceNumber = 2;
    }
    else {
        getHumanChoice();
    }
    return humanChoiceNumber;

}







