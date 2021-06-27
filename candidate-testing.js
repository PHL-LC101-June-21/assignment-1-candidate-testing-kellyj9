/* This program prompts the user to answer pre-determined quiz questions, compares the candidate's answers to a list of correct answers, computes a grade for the quiz, and displays a quiz report for the user.*/

// NOTE: This program asks the full list of questions and provides feedback for each answer within function askQuestion().
// NOTE: Functionality to provide user feedback regarding each candidate answer was added to function askQuestion() rather than to function gradeQuiz().
// NOTE: Added one additional function called function displayReport(quizGrade, quizCandidateName, quizQuestions, quizCandidateAnswers, quizCorrectAnswers).  The function displays a report of the candidate's name, quiz questions/ candidate answers/ correct answers and the results of the quiz, based on the function parameters.

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

// NOTE: For some reason, the autograder needs the assignment in the below line to pass the test
let question = questions[0];

// corresponding answers; must be in this order.
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

// NOTE: For some reason, the autograder needs the assignment in the below line to pass the test.
let correctAnswer = correctAnswers[0];

let candidateAnswers = []; // collects candidate answers

function askForName() {
  // TODO 1.1b: Ask for candidate name //
  while (candidateName === ""){
    candidateName = input.question("What is your name? ").trim();
    if (candidateName === ""){
      console.log(`\nYour name is required for this quiz.`);
    }
  }
}

// NOTE: THIS FUNCTION ASKS ALL OF THE QUESTIONS and collects candidate answers
// NOTE: Added user feedback to state whether the answer was correct/incorrect/skipped.
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  // ask each question, collect answer, provide feedback
  for (let i = 0; i < questions.length; i++){
    // ask question and get answer

    // ask question and collect candidate answer
    // NOTE: We'll allow user to skip past the question by pressing enter key, but empty string will still be collected
    candidateAnswers.push(input.question("\n" + questions[i] + "\n").trim());

    // display user feedback regarding the candidate answer
    if (candidateAnswers[i] === "") {
      // let user know they skipped answering
      console.log(`(You skipped answering the question.)`);
    }
    else if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){ 
      // let user know answer was correct
      console.log(`(YES! Correct Answer!)`);
    }
    else {
      // let user know answer was incorrect
      console.log(`(Aw, Incorrect Answer.)`);
    }
  }
}

// NOTE: Report display functionality is in function displayReport()
// This function only computes and returns the grade
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // NOTE: User feedback regarding answer was added to function askQuestion()

  let countCorrectAnswers = 0; // count of correct answers

  // check candidate answers
  for (let i = 0; i < questions.length; i++){
    // compare candidate answer to correct answer
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){ 
      // answer was correct; increment counter
      countCorrectAnswers +=1;
    }
  }
  // calculate final grade
  let grade = (countCorrectAnswers / questions.length) * 100; 
  return grade;
}

// KELLY: THE BELOW FUNCTION displayReport WAS ADDED. 
// FUNCTION PURPOSE: The function displays the user inputs, quiz questions/answers and grade based on the parameters given.
// FUNCTION PARAMETERS: 
// quizGrade is a number reflecting a quiz score;
// quizCandidateName is a string reflecting the candidate's name
// quizQuestions is a one-dimensional array of strings relecting the quiz questions
// quizCandidateAnswers is a one-dimensional array of strings reflecting the candidates answers;
// quizCorrectAnswers is a one-dimensional array of strings reflecting the correct answers to the quiz
// The function return value will be undefined.
function displayReport(quizGrade, quizCandidateName, quizQuestions, quizCandidateAnswers, quizCorrectAnswers) {
  // display report header
  console.log(`\n-----------------------------\nCandidate Name: ${quizCandidateName}`);

  // display report body
  for (let i = 0; i < quizQuestions.length; i++){
    console.log(`\n${i+1}) ${quizQuestions[i]}`);
    console.log(`Your Answer: ${quizCandidateAnswers[i]}`);
    console.log(`Correct Answer: ${quizCorrectAnswers[i]}`);
  }

  // display report footer
  // NOTE: Used computation (quizGrade*quizQuestions.length)/100) to compute count of correct answers
  console.log(`\n>>> Overall Grade: ${quizGrade}% (${(quizGrade*quizQuestions.length)/100} of ${quizQuestions.length} responses correct) <<<`);
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

  // write a message to the console greeting the user using the name they just provided
  console.log(`\nGreetings, ${candidateName}!`);

  // ask ALL of the questions in the array, collect responses, and provide feedback
  askQuestion();

  // grade the quiz
  let finalGrade = gradeQuiz(this.candidateAnswers);

  // display a final grade report
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