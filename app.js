'use strict';

var userName = prompt('What is your name?');
var confirmQuiz = confirm('Hello, ' + userName + '. Would you like to play a game?');

//This is just to get the game rolling. Will start regardless of answer.
if(confirmQuiz === true) {
  console.log('Great! Lets get started.');
} else {
  console.log('Too bad, starting anyway.');
}

//Setting up all of the variables.
var ranNumber = Math.floor (Math.random() * 50) + 1; //For number guessing game later.

var questionOne = 'Am I from Georgia?';
var questionTwo = 'Do I like sushi?';
var questionThree = 'Was I in the Army?';
var questionFour = 'Do I have a degree?';
var questionFive = 'Am I awesome?';
var questionSix = 'How old am I? Between 0-50.';
var questionSeven = 'Can you guess a country I\'ve visited outside the US?';

var correctOne = 'Yes! I love sweet tea, therefore I\'m from Georgia.';
var correctTwo = 'Duh, sushi is delicious. Glad you think so too.';
var correctThree = 'Correct! I was actually in the Navy.';
var correctFour = 'You\'e right. I\'m a lazy person at my core.';
var correctFive = 'Yep, I\'m so awesome.';
var correctSix = 'You\'re right! I am totally that age and didn\'t use a random number!';
var correctSeven = 'Correct!';

var incorrectOne = 'Nope! Fayetteville, Ga is my hometown.';
var incorrectTwo = 'WRONG! Sushi is best food.';
var incorrectThree = 'No, I was in the Navy as a Nuclear Machinist\'s mate. Not to toot my own horn.';
var incorrectFour = 'You\'re expectations are way too high. I am lazy.';
var incorrectFive = 'Um, rude. I am awesome.';
var incorrectSixLow = 'Nope! Try a bigger number!';
var incorrectSixHigh = 'Nope! Try a lower number!';
var incorrectSix = 'You\'ve run out of guesses. I\'m ' + ranNumber + '. Yeah, totally that age.';
var incorrectSeven = 'Incorrect!';

//Now we set up the arrays with all of the variables.
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
var correctAnswerResponses = [correctOne, correctTwo, correctThree, correctFour, correctFive, correctSix, correctSeven];
var incorrectAnswerResponses = [incorrectOne, incorrectTwo, incorrectThree, incorrectFour, incorrectFive, incorrectSix, incorrectSixLow, incorrectSixHigh, incorrectSeven];
var answers = ['Y', 'Y', 'N', 'N', 'Y']; //To check their answers against.
var userAnswers = []; //to .push their answers into.
var userNumberGuesses = []; //to .push their number and country geusses until correct or end.
var countries = ['IRELAND', 'MEXICO', 'CANADA'];
var userCountryGuesses = [];
var score = 0;

//Now the game begins. Using a for loop to access the questions array then returning a response from either the correct or incorrect answer response arrays using an if/else statement. Push user's answer to the userCorrectAnswers array if, well, correct.
for (var i = 0; i < 5; i++) {
  userAnswers.push(prompt(questions[i]));
  if(userAnswers[i].toUpperCase() === answers[i]){
    console.log(correctAnswerResponses[i]);
    score++;
  } else {
    console.log(incorrectAnswerResponses[i]);
  }
}

for(var guesses = 0; guesses < 4; guesses++){
  var guess = prompt('How old am I?');
  var guess = parseInt(guess, 10);
  userNumberGuesses.push(guess);
  if(userNumberGuesses[guesses] === ranNumber){
    console.log(correctAnswerResponses[5]);
    userAnswers.push(userNumberGuesses[guesses]);
    score++;
    break;
  } else if(userNumberGuesses[guesses] > ranNumber){
    console.log(incorrectSixHigh);
  } else if(userNumberGuesses[guesses] < ranNumber){
    console.log(incorrectSixLow);
  } else {
    console.log('I don\'t recognize that answer.');
    userNumberGuesses.splice(-1, 1); // Need to remove last guess, or else it will get stuck in the loop.
    guesses--; //Need to lower the number, or the game can end with non-number guesses.
  }
  if(guesses === 3){
    console.log(incorrectSix);
  }
}

for(var secondQuizGuesses = 0; secondQuizGuesses < 6; secondQuizGuesses++){
  var userCountryGuesses = prompt(questions[6]);
  userCountryGuesses.push(userCountryGuess);
  if(userCountryGuesses[secondQuizGuesses].toUpperCase() === countries[0] || countries[1] || countries[2]){
    console.log(correctAnswerResponses[6]);
    userAnswers.push(userCountryGuesses[secondQuizGuesses]);
    score++;
    break;
  } else {
    console.log(incorrectSeven);
  }
}
console.log('I\'ve been to Ireland, Mexico, and Canada!');

//Congratulate the user and give them their score.
console.log('Congratulations! You\'re score is: ' + score + '.');
if(score < 3){
  console.log('Wow, you don\'t know me at all!');
} else {
  console.log('Wow, you know me pretty well!');
}

// if(userAnswers[i].toUpperCase === answers[i]){
//   console.log(correctAnswerResponses[i]);
//   userCorrectAnswers.push(userAnswers[i]);
// } else {
//   console.log(incorrectAnswerResponses[i]);
// }
//
// if(userAnswers[1].toUpperCase === 'Y'){
//   console.log(correctAnswerResponses[1]);
//   userCorrectAnswers.push(userAnswers[1]);
// } else {
//   console.log(incorrectAnswerResponses[1]);
// }
//
// if(userAnswers[2].toUpperCase === 'Y'){
//   console.log(correctAnswerResponses[2]);
//   userCorrectAnswers.push(userAnswers[2]);
// } else {
//   console.log(incorrectAnswerResponses[2]);
// }
//
// if(userAnswers[3].toUpperCase === 'Y'){
//   console.log(correctAnswerResponses[3]);
//   userCorrectAnswers.push(userAnswers[3]);
// } else {
//   console.log(incorrectAnswerResponses[3]);
// }
//
// if(userAnswers[4] === 'Y'){
//   console.log(correctAnswerResponses[4]);
//   userCorrectAnswers.push(userAnswers[4]);
// } else {
//   console.log(incorrectAnswerResponses[4]);
// }
//
// for(var guesses = 0; guesses < 5; guesses++){
//   if(userAnswers[5 + guesses] === '23'){
//     console.log(correctAnswerResponses[5]);
//     userCorrectAnswers.push(userAnswers[5 + guesses]);
//     break;
//   } else if(userAnswers[5 + guesses] >= '23'){
//     console.log();
//   }
// }
// for(var countries = 0; countries < 7; countries++){
//   if(userAnswers[6 + guesses + countries] === 'IRELAND'){
//     console.log(correctAnswerResponses[6]);
//     userCorrectAnswers.push(userAnswers[6 + guesses + countries]);
//     break;
//   } else {
//     console.log(incorrectAnswerResponses[6]);
//   }
// }
