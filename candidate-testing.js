/* This program prompts the user to answer pre-determined quiz questions, compares the candidate's answers to a list of correct answers, computes a grade for the quiz, and displays a quiz report for the user.*/

// NOTE: This program asks the full list of questions within function askQuestion().
// NOTE: Added one additional function called function displayReport(quizGrade, quizCandidateName, quizQuestions, quizCandidateAnswers, quizCorrectAnswers).  The function displays the candidate's name, quiz questions/ cadidate answers/ correct answers and the results of the quiz based on the function parameters. //
// LAST NOTE: I thought some of the functions in the starter code could use more parameters, but I wasn't sure if the autograding tests would pass by modifying the function parameters, so I left them as is.

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswer = "";

// array of questions to ask the user; must be in this order.
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

// NOTE: For some reason, the autograder needs the below line to pass the test.
let question = questions[0];

// corresponding answers; must be in this order.
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

// NOTE: For some reason, the autograder needs the below line to pass the test.
let correctAnswer = correctAnswers[0];

let candidateAnswers = []; // collects candidate answers

function askForName() {
  // TODO 1.1b: Ask for candidate name //
  while (candidateName === ""){
    candidateName = input.question("What is your name? ");
    if (candidateName === ""){
      console.log("\nYour name is required for this quiz.");
    }
  }
}

// NOTE: THIS FUNCTION ASKS ALL OF THE QUESTIONS in the questions array:
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // loop through the array and ask each question
  for (let i = 0; i < questions.length; i++){
    // ask question
    question = questions[i];
    candidateAnswer = input.question(question);
    console.log("");
    // collect candidate answer
    candidateAnswers.push(candidateAnswer);
  }
}

// NOTE! Report display functionality is in added function called displayReport.
// This function only computes and returns the grade. 
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let countCorrectAnswers = 0; // count of correct answers

  // check candidate answers
  for (let i = 0; i < questions.length; i++){
    correctAnswer = correctAnswers[i];
    candidateAnswer = candidateAnswers[i];
    
    // compare candidate answer to correct answer
    if (candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()){ 
      // answer was correct; increment counter
      countCorrectAnswers +=1; 
    }
  }
  // calculate final grade:
  let grade = countCorrectAnswers / questions.length * 100; 
  return grade;
}

// KELLY: THE BELOW FUNCTION displayReport WAS ADDED.  
// FUNCTION PURPOSE: The function displays the user inputs, quiz questions/answers and grade based on the parameters given.
// FUNCTION PARAMETERS: 
// quizGrade is a number reflecting a quiz score; // quizCandidateName is a string reflecting the candidate's name; 
// quizQuestions is a one-dimensional array of strings relecting the quiz questions
// quizCandidateAnswers is a one-dimensional array of strings reflecting the candidates answers; 
// quizCorrectAnswers is a one-dimensional array of strings reflecting the correct answers to the quiz.
// The function return value will be Undefined.
function displayReport(quizGrade, quizCandidateName, quizQuestions, quizCandidateAnswers, quizCorrectAnswers) {
  // display report header
  console.log(`\n-----------------------------\nCandidate Name: ${quizCandidateName}`);

  // display report body
  for (let i = 0; i < quizQuestions.length; i++){
    console.log(`\n${i+1}) ${quizQuestions[i]}`);
    console.log(`Your Answer: ${quizCandidateAnswers[i]}`);
    console.log(`Correct Answer: ${quizCorrectAnswers[i]}`);
  }

  // display report footer:
  console.log(`\n>>> Overall Grade: ${quizGrade}% (${quizGrade*(quizQuestions.length/100)} of ${quizQuestions.length} responses correct) <<<`);
  if (quizGrade >= 80){
    console.log(`>>> Status: PASSED <<<`);
  }
  else {
    console.log(`>>> Status: FAILED <<<`);
  }
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  askForName();

  // write a message to the console greeting the user using the name they just provided.
  console.log(`Greetings, ${candidateName}!\n`);

  // ask ALL of the questions in the array
  askQuestion();

  //grade the quiz and then display the final grade report
  let finalGrade = gradeQuiz(this.candidateAnswers);

  // display the grade report
  displayReport(finalGrade, candidateName, questions, candidateAnswers, correctAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};