"use strict";


// two player game
// display rules
// players roll all 6 dice and add up their score
// compare the two totals of each player
// higher total gets a point
// first to three

// Player, Die, Game

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

////////////////////////////

//let game = new Game();
//game.runGame();


//  Create the classes for RPSLS:  Players, Probablity Calculator, Game



/*
class Player {
    constructor() {
      //name, score, list of available gestures.
      this.score = 0;
      this.name = null;
      this.gesture = null;

    }
    chooseGesture(){
      console.log("error override this method");
    }
}
class Human extends Player {
      constructor() {
      super();
    
  }
  chooseGesture(){
    //get user input to choose gesture
    //store choice to this.gesture
  }
}

class AI extends Player {
      constructor() {
      super();
  
  }


  chooseGesture() {
   

  //use random/floor to choose gesture
  // another method to choose name
  
  
  
  //chooseName()



class Game {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;


  }
  gameSetup() {
    //setup choose AI/Human for player one or two.  Putting names to the players.
    //put a prompt for the names.  Prompt for the types.  AI or Human.


 



  
  




  
 // function choice(cities)
 // {
 // return cities[Math.floor(Math.random() * cities.length)];
     
 // }
 //    let cities = ["Paris", "London", "Rome", "Berlin", "Madrid", "Athens", "Budapest", "Moscow", "Zurich"];
 //     console.log(choice(cities));



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



class Players {
  constructor() {
    //name, score, list of available gestures.
    this.score = 0;
    this.name = null;
    this.gesture = null;

  }
  chooseGesture() {
    console.log("error override this method");
  }
}


class Human extends Player {
  constructor() {
    super();

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
  constructor() {
    super();

  }
  chooseGesture() {

    let heroes = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
    let randomEvent = [(Math.floor(Math.random() * (heroes.length)))];


    console.log(heroes[randomEvent]);

    //return heroes[randomEvent];
    this.gesture = heroes[randomEvent];
  }

  rulesOfTheGame() {

    console.log("Will this print and if it doesn't why isn't displaying on the console?");
  }

  // another method to choose name




}

class Games {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;
    this.gesture = 0;
  }
  runGame() {
    //primary workflow.  Game setup and make a loop after set up the game make the logic to run the game.
    //player roles and create a comparison class.
    console.log("Hello World!");
    this.gamesSetup();
    this.chooseName();
    this.playerOne.chooseGesture();
    this.playerTwo.chooseGesture();
    // this.gesture.chooseGesture();
    // this.gesture.chooseGesture();
    // this.gesture.chooseGesture();
    this.compareGestures();
    //  this.playerFour.compareGestures();
    //  console.log(this.playerOne.gesture);
  }
  compareGestures() {
    //compare gestures *this.playerOne.gesture * this.playerTwo.gesture
    //  let rockWinsOne = ["Rock"] > ["Scissors"];
    //  let rockWinsTwo = ["Rock"] > ["Lizard"];
    //  let paperWinsOne = ["Paper"] > ["Rock"];
    //  let paperWinsTwo = ["Paper"] > ["Spock"];
    //  let scissorsWinsOne = ["Scissors"] > ["Paper"];
    //  let scissorsWinsTwo = ["Scissors"] > ["Lizard"];
    //  let lizardWinsOne = ["Lizard"] > ["Spock"];
    //  let lizardWinsTwo = ["Lizard"] > ["Paper"];
    //  let spockWinsOne = ["Spock"] > ["Scissors"];
    //  let spockWinsTwo = ["Spock"] > ["Rock"];
    let fluffy = [];
    let counterPlayerOne = [] + 1;
    fluffy += counterPlayerOne;
    let furry = [];
    let counterPlayerTwo = [] + 1;
    furry += counterPlayerTwo;

    if (this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Scissors") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Lizard") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Rock") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Spock") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Paper") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Lizard") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Spock") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Paper") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Scissors") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Rock") {
      console.log("Player one has won this round.", counterPlayerOne);
    } else if (this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Scissors") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Lizard") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Rock") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Spock") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Paper") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Lizard") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Spock") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Paper") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Scissors") {
      console.log("Player two has won this round.", counterPlayerTwo);
    } else if (this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Rock") {
      console.log("Player two has won this round.", counterPlayerTwo);
    
    } else if(this.playerOne.gesture === this.playerTwo.gesture && this.playerTwo.gesture === this.playerOne.gesture){
      console.log("Tied gestures:  Choose again!");
    
    }
    
  }
  determineWinner() {












  }

  


    /*if(gesture > gesture === rockWinsOne || rockWinsTwo){
    
        console.log("Rock takes the match.");
    
        }
        else if(gesture > gesture === paperWinsOne || paperWinsTwo){
    
        
          console.log("Paper crumbles the opponent.");
    
      }
        else if(gesture > gesture === scissorsWinsOne || scissorsWinsTwo){
    
        
          console.log("Scissors stabs and wins.");
        }
        else if(gesture > gesture === lizardWinsOne || lizardWinsTwo){
    
        
          console.log("Lizard chews them up.");
        }
        else if(gesture > gesture === spockWinsOne || spockWinsTwo){
    
        
          console.log("Spock uses his ears to spike it.");
        }*/
    //  let heroes = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];

    //  for(let i = 0; i < heroes.length && [i] === playerThree; i++){
    //    }

    //  If([playerThree] > [playerFour] === rockWinsOne || rockWinsTwo || paperWinsOne || paperWinsTwo || scissorsWinsOne || scissorsWinsTwo || lizardWinsOne || lizardWinsTwo || spockWinsOne || spockWinsTwo);{







    //  console.log(playerThree + "wins this round!");

  


  //If(playerFour > playerThree === rockWinsOne || rockWinsTwo || paperWinsOne || paperWinsTwo || scissorsWinsOne || scissorsWinsTwo || lizardWinsOne || lizardWinsTwo || spockWinsOne || spockWinsTwo);{





  //  console.log(playerFour + "wins this round!");

  //return this.playerThree + this.playerFour;
  //}




  gamesSetup() {
    //setup choose AI/Human for player one or two.  Putting names to the players.
    //put a prompt for the names.  Prompt for the types.  AI or Human.
    this.playerOne = new AI();
    this.playerTwo = new AI();
    this.playerThree = new Human();
    this.playerFour = new Human();


  }

  chooseName() {

    let choosePlayersOne = prompt("Do you want to want two humans to play? yes or no?");



    let playerThree = prompt("Please enter your name as the first player.");
    let playerFour = prompt("Please enter your name as the second player.");



    switch (choosePlayersOne) {
      case "yes":
        console.log("Player One's Name: ", playerThree);
        console.log("Player Two's Name: ", playerFour);
        // this.playerThree
        break;
      case "no":


        break;
      default:
        break;

    }
    let choosePlayersThree = prompt("Do you want a human versus computer game? yes or no?");

    let playerOne = "Kitt";
    switch (choosePlayersThree) {
      case "yes":
        //playerOne = new Human();
        //playerTwo = new AI();
        let playerThree = prompt("Please enter your name as the first player.");
        console.log("Player One's Name: ", playerThree);
        console.log("The fast and furious Nightrider: ", playerOne);
        break;
      case "no":
        //playerOne = new Human();
        //playerTwo = new Human();
        break;
      default:
        break;
    }

    let choosePlayersTwo = prompt("Do you want to watch Kit and Hal to play? yes or no?");

    switch (choosePlayersTwo) {
      case "yes":
        let playerOne = "Kitt";
        let playerTwo = "Hal";
        console.log("Nightrider's ", playerOne);
        console.log("2001 Space's Indomitable Compter: ", playerTwo);
        break;
      case "no":
        break;
      default:
        break;
    }




  }





}










let game = new Games();
game.runGame();






/* if(randomEvent = 1 === [heroes[0]]){
    }
    else if(randomEvent = 2 === [heroes[1]]){

    }
    else if(randomEvent = 3 === [heroes[2]]){

    }
    else if(randomEvent = 4 === [heroes[3]]){

    }
    else if(randomEvent = 5 === [heroes[4]]){

    }
    console.log([heroes]);*/


