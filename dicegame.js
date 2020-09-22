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
game.runGame();