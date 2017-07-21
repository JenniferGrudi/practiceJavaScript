//challenge four//
//quiz game console///

//1. Build a function constructor called Question to describe a question. A question should include: 
// A.) question 
// B.) the answers from which the player can choose the correct one (choose and adequate data structure here, array, object, etc.) 
// C.) correct answer (I would use a number for this)


//this is my constructor in a function
var Question = function(question, answer, realAnswer){
  this.question = question; 
  this.answer = answer;
  this.realAnswer = realAnswer;
}

//2. create a couple of questions using the constructor...

//how to make answers an array?
//a = ['a1', 'a2', 'a3']

//function(var question, var answer, var rightAnswer)

var question1 = new Question('What is my name?', ['Jennifer', 'Nancy', 'Stacy'], 0);

var question2 = new Question('What is my favorite color?', ['black', 'green', 'pink', 'blue'], 1);

var question3 = new Question('what is my favorite holiday?', ['Christmas', 'Thanksgiving', 'Halloween', 'Easter'], 2);

//3. store all questions inside an array

var arrayOfQuestions = [question1, question2, question3];

//4.) Select on random question and log it on the console, together with the possible answer(each question should have a number)

  //Math.floor takes the decimal returns the less than or equal to a given number.  Example: Math.floor(1.2) will give you 1  

  //Math.random() picks a random number with a decimal.  * numbers you want to randomly pick from.  example: Math.random() * 3 will pick numbers from 1-3.  The number may be objects?

//q = Math.floor(Math.random() * 3);
//console.log(q); //this gives me a result of NaN - Not a Number

q = Math.floor(Math.random() * arrayOfQuestions.length)
// console.log(q);

//method using constuctor prototype in order to display questions

Question.prototype.randomQuestion = function() {
  //need to log questions
  console.log('Question: ' + this.question);

  for (var i = 0; i < this.answer.length; i++) { 
    console.log(i + ': ' + this.answer[i]);
  }
};

arrayOfQuestions[q].randomQuestion();

//5. Use the 'prompt' functin to ask the user for the correct answer. The user should input the number of the correct answer.  

var guess = prompt('Please take a guess from the answers...');

//6. check if the answer is correct and print to the console whether the answer is correct or not 

//another method using the constructor
//i need to pass in something to this function cause i need to compare it with my answers

Question.prototype.checkAnswer = function(guess) {
  if(guess === this.realAnswer){
    alert('You are correct!  You DO know me :)');
  } else {
    alert('NOPE! maybe next time');
  }
};

arrayOfQuestions[q].checkAnswer();





//7. suppose this code would be plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (hint: we learned a special technique to do exactly that).



