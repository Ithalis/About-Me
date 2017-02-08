'use strict';

var userName = prompt('What is your name?');
var confirmQuiz = confirm('Hello, ' + userName + '. Would you like to play a game?');

//This is just to get the game rolling. Will start regardless of answer.
if(confirmQuiz === true) {
  console.log('Great! Lets get started.');
} else {
  console.log('Too bad, starting anyway.');
}

alert('Please use Y or N to answer all questions.');
//Here is where the questions begin.
var questionOne = prompt('Am I from Georgia?');
if(questionOne.toUpperCase() === 'Y'){
  console.log('Yes! I love sweet tea, therefore I am from Georgia.');
} else {
  console.log('Nope! Fayetteville, Ga is my hometown.');
}

var questionTwo = prompt('Do I like sushi?');
if(questionTwo.toUpperCase() === 'Y'){
  console.log('Duh, sushi is stupid good.');
} else {
  console.log('WRONG! Sushi is best food.');
}

var questionThree = prompt('Was I in the Army?');
if(questionThree.toUpperCase() === 'N'){
  console.log('Correct! I was actually in the Navy.');
} else {
  console.log('No, I was in the Navy as a Nuclear Machinist\'s mate. Not to toot my own horn.');
}

var questionFour = prompt('Do I have a degree?');
if(questionFour.toUpperCase() === 'N'){
  console.log('You\'e right. I\'m a lazy person at my core.');
} else {
  console.log('You\'re expectations are way too high. I am lazy.');
}

var questionFive = prompt('Am I awesome?');
if(questionFive.toUpperCase() === 'Y'){
  console.log('Yep! I am basically the most awesome person to be on earth.');
} else {
  console.log('Um, rude. I am awesome.');
}
