"use strict";

/*
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

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneTotal = this.playerOne.rollAllDice(this.dice);
      let playerTwoTotal = this.playerTwo.rollAllDice(this.dice);

      if(playerOneTotal > playerTwoTotal) {
        console.log(this.playerOne.name + " wins this round!");
        this.playerOne.score++;
      }
      else if(playerTwoTotal > playerOneTotal) {
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
    if(this.playerOne.score > this.playerTwo.score) {
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

    for(let i = 0; i < diceArray.length; i++) {
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

let game = new Game();
game.runGame();*/


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
   
    let heroes = ["Rock","Scissors","Paper","Lizard","Spock"];
    let randomEvent = heroes[(Math.floor(Math.random() * (heroes.length)) + 1)];
  
    if(randomEvent = 1 === [heroes[0]]){
      }  
      else if(randomEvent = 2 === [heroes[1]]){

      }
      else if(randomEvent = 3 === [heroes[2]]){

      }
      else if(randomEvent = 4 === [heroes[3]]){

      }
      else if(randomEvent = 5 === [heroes[4]]){

      }
      console.log([heroes]);
    
      //return heroes[(Math.floor(Math.random() * (heroes.length)) + 1)];

    }
}
    //use random/floor to choose gesture
  // another method to choose name
  //chooseName()

  //  this.name = "Kit";
  //  this.name = "Hal";

  //  let nameAIOne = prompt("Do you want Kit to be your opponent?  yes or no?");
  //  let nameAITwo = prompt("Do you want Hal to be your opponent?  yes or no?");

  //  switch(nameAIOne){
  //    case 'yes':
  //      this.name = "Kit";





class Game {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;


  }
  gameSetup() {
    //setup choose AI/Human for player one or two.  Putting names to the players.
    //put a prompt for the names.  Prompt for the types.  AI or Human.

  

  }
  gameRun(){

    
  }
    //loop to give main game logic
}
// human and AI should have the same methods

/*class Hands {
  constructor() {
    this.contestantOne = new Fellows(name);
    this.contestantTwo = new Fellows(name);
    this.computerOne = new Fellows("Hal");
    this.computerTwo = new Fellows("Kit");
  
  this.result = [];
  let win = this.contestantOne > this.contestantTwo || this.contestantTwo > this.contestantOne || this.computerOne > this.computerTwo || this.computerTwo > this.computerOne; 
  let rock = new ProbabilityCalculator(win);
  let scissors = new ProbabilityCalculator(win);
  let paper = new ProbabilityCalculator(win);
  let lizard = new ProbabilityCalculator(win);
  let spock = new ProbabilityCalculator(win);
  */


 // this.result.push()
  
 // while(this.contestantOne.score < 3 && this.contestantTwo.score < 3 || this.contestantOne.score < 3 && this.computerOne.score < 3 || this.computerOne.score < 3 && this.computerTwo.score < 3){
    //change this while loop into several while loops in sequence.
 // }


  
  



/*class Fellows {
  constructor(name) {
    this.score = 0;
    this.name = name;
*/  
//  let heroes = ["Rock","Scissors","Paper","Lizard","Spock"];
  


//class ProbabilityCalculator {
//  constructor(randomEvent) {
//    this.randomEvent = randomEvent;
  

  /*getRandomEvent() {
    let choices = prompt("1: Hit him high, 2: Run, 3: Strike him hard, 4: Lurch forward, 5 Do nothing.")
      switch(choices){
        case "1":
          let randomEvent = Math.random(heroes[0], heroes[1], heroes[2], heroes[3], heroes[4]);
          console.log(randomEvent);
        break;
        default:
      } return this.randomEvent;
    
    let getRandomInteger = Math.floor(Math.random() * randomEvent) + 1;
    let winner = heroes[i] * getRandomInteger;
      */
    
  


  //function choices(heroes){
  //}

  //let heroes = ["Rock","Scissors","Paper","Lizard","Spock"];
  //let randomEvent = [(Math.floor(Math.random() * (heroes.length)) + 1)];
  //console.log(randomEvent);
  
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





chooseGesture(){ 
   
  let heroes = ["Rock","Scissors","Paper","Lizard","Spock"];
  let randomEvent = heroes[(Math.floor(Math.random() * (heroes.length)))];

  for(let i = 0; i < heroes.length; i++){

    if(randomEvent = [i]){

    }
    console.log(heroes[i]);
  }
}

rulesOfTheGame(){

console.log("Will this print and if it doesn't why isn't displaying on the console?");
}





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

}
