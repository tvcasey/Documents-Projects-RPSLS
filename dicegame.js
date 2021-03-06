"use strict";


// two player game
// display rules
// players roll all 6 dice and add up their score
// compare the two totals of each player
// higher total gets a point
// first to three

// Player, Die, Game
/*
class Game {
  constructor() {
    this.playerOne = new Player("Mike");
    this.playerTwo = new Player("Nevin");

    this.dice = [];

    this.dice.push(new Die(4));
    this.dice.push(new Die(6));
    this.dice.push(new Die(8));
    this.dice.push(new Die(10));
    this.dice.push(new Die(12));
    this.dice.push(new Die(20));
  }

  runGame() {  // "main" method
    this.displayRules();

    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneTotal = this.playerOne.rollAllDice(this.dice);
      let playerTwoTotal = this.playerTwo.rollAllDice(this.dice);

      if (playerOneTotal > playerTwoTotal) {
        console.log(this.playerOne.name + " wins this round!");
        this.playerOne.score++;
      }
      else if (playerTwoTotal > playerOneTotal) {
        console.log(this.playerTwo.name + " wins this round!");
        this.playerTwo.score++;
      }
      else {
        console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
      }
    }

    this.displayGameWinner();
  }

  displayRules() {
    console.log("Welcome to the War Dice Game!")
    console.log("Two players will roll 6 dice and total up their results.")
    console.log("The higher total will earn that player a point");
    console.log("The first player to three points will win the game!");
  }

  displayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
      console.log(this.playerOne.name + " wins this game!");
    }
    else {
      console.log(this.playerTwo.name + " wins this round!");
    }
  }
}

class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
  }

  rollDie(die) {
    let rollResult = die.generateRandomNumber();
    return rollResult;
  }

  rollAllDice(diceArray) {
    let runningTotal = 0;

    for (let i = 0; i < diceArray.length; i++) {
      let result = this.rollDie(diceArray[i]);
      runningTotal += result;
    }

    return runningTotal;
  }
}

class Die {
  constructor(numberOfSides) {
    this.numberOfSides = numberOfSides;
  }

  generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
    return randomNumber;
  }
}
*/
////////////////////////////

//let game = new Game();
//game.runGame();


//  Create the classes for RPSLS:  Players, Probablity Calculator, Game





 




    // put in an array not based on dice buy based on probability.
    // let = ["rock","scissors","paper","lizard","spock"];
    // have a while loop choose [i] by random based on mathfloor.random.to the
    // array.  See if this is possible.  Once you get the random number you
    // floor it and choose the right [i].  Remember I can always use the
    // dice method.  You compare the results to the integer of the array.
    // Once you get that you have a comparison to the opponents choice and find 
    // who the winner is.  Use a while loop to see if the game should go on.
  



/*RPSLS User Stories
Out of 65 points
Using the concepts of OOP by creating classes and using objects (instances of those classes) to interact
with each other, create a console version of the classic game Rock Paper Scissors Lizard Spock.
User stories:
(5 points): As a developer, I want to make good, consistent commits.
(15 points): As a developer, I want to find a way to properly incorporate inheritance into my game.
(5 points): As a developer, I want to account for and handle bad user input, ensuring that any user input
is validated and reobtained if necessary.
(10 points): As a developer, I want to store all of the gesture options/choices in an array. I want to find a
way to utilize the array of gestures within my code (display gesture options, assign player a
gesture, etc).
(10 points): As a player, I want the correct player to win a given round based on the choices* made by
each player.
(10 points): As a player, I want the game of RPSLS to be at minimum a ‘best of three’ to decide a
winner.
(10 points): As a player, I want the option of a single player (human vs AI) or a multiplayer (human vs
human) game.
* Rock crushes Scissors
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
https://www.youtube.com/watch?v=cSLeBKT7-sM  */



class Player {
  constructor(name) {
    //name, score, list of available gestures.
    this.score = 1;
    this.name = null;
    this.gesture = null;

  }

}


class Human extends Player {
  constructor(name) {
    super(name);

  }
  chooseGesture() {

    let heroes = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
    let randomEvent = [(Math.floor(Math.random() * (heroes.length)))];


    console.log(heroes[randomEvent]);

    //return heroes[randomEvent];
    this.gesture = heroes[randomEvent];
  }
}


class AI extends Player {
  constructor(name) {
    super(name);

  }
  chooseGesture() {

    let heroes = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
    let randomEvent = [(Math.floor(Math.random() * (heroes.length)))];


    console.log(heroes[randomEvent]);

    //return heroes[randomEvent];
    this.gesture = heroes[randomEvent];
  }

}

class Games {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;
  }
  runGame() {
    //primary workflow.  Game setup and make a loop after set up the game make the logic to run the game.
    //player roles and create a comparison class.
    this.gamesSetup();
    this.chooseName();
    do{
    this.playerOne.chooseGesture();
    this.playerTwo.chooseGesture();
    this.compareGestures();
    }
    while (this.playerOne.score < 3 || this.playerTwo.score < 3){

    }
     
    this.determineWinner();
  }
  compareGestures() {

    if (this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Scissors") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Lizard") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Rock") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Spock") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Paper") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Lizard") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Spock") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Paper") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Scissors") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Rock") {
      console.log("Player one has won this round.", this.playerOne.score++);
    } else if (this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Scissors") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Lizard") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Rock") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Spock") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Paper") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Lizard") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Spock") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Paper") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Scissors") {
      console.log("Player two has won this round.", this.playerTwo.score++);
    } else if (this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Rock") {
      console.log("Player two has won this round.", this.playerTwo.score++);

    } else if (this.playerOne.gesture === this.playerTwo.gesture) {
      console.log("Tied gestures:  Choose again!");


    }

  }

  determineWinner() {

    if(this.playerOne.score > this.playerTwo.score){
      console.log("PLAYER ONE WINS THE MATCH.");
    } else if(this.playerTwo.score > this.playerOne.score) {
      console.log("PLAYER TWO WINS THE MATCH.");
    } else if(this.playerOne.score === this.playerTwo.score){
      console.log("GAME TIED, PLEASE REFRESH AND TRY AGAIN.");
    }
    }
  
  gamesSetup() {


    console.log("Welcome to RPSLS and get ready to gesture.  Hit refresh to see.");
    console.log("Watch as two opponents battle it out toward ultimate victory of 3 of 5.");
    console.log("There may be ties, so be ready to refresh for another bunch of gesture battles.")
    
  }

  chooseName() {

    let choosePlayersOne = prompt("Do you want to want two humans to play? yes or no?");

    switch (choosePlayersOne) {
      case "yes":
        let playerOneName = prompt("Please enter your name as the first player.");
        let playerTwoName = prompt("Please enter your name as the second player.");
        this.playerOne = new Human(playerOneName);
        this.playerTwo = new Human(playerTwoName);
        console.log("Player One's Name: ", playerOneName);
        console.log("Player Two's Name: ", playerTwoName);
      
        break;
      case "no":
        let choosePlayersTwo = prompt("Do you want a human versus computer game? yes or no?");

          switch (choosePlayersTwo) {
            case "yes":
              //playerOne = new Human();
              //playerTwo = new AI();
              let playerOneName = prompt("Please enter your name as the first player.");
              this.playerOne = new Human(playerOneName);
              this.playerTwo = new AI("Kitt");
              console.log("Player One's Name: ", playerOneName);
              console.log("The fast and furious Nightrider: ", "Kitt");
              break;
            default:
              this.chooseName();
              break;
            }
          break;
        default:
        this.chooseName();
        break;

    }
    

  }

}



let game = new Games();
game.runGame();



