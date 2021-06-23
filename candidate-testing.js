const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswer= "";

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
  //this function returns the candidate's name.  
  // Will return Undefined

  while (candidateName === ""){
    candidateName = input.question("What is your name? ");
    if (candidateName === ""){
      console.log("\nYour name is required for this quiz.");
    }
  }
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // NOTE: THIS FUNCTION ASKS ALL OF THE QUESTIONS in the questions array (parameter)
  // and returns an array of collected answers

  //loop through the questions array and ask the questions
  for (let i = 0; i < questions.length; i++){
    // ask question
    question = questions[i];
    candidateAnswer = input.question(question);
    console.log("");
    // collect candidate answer
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  // NOTE! diplay functionality moved to function displayReport(grade);  
  //  This function only computes and returns the grade.

  let countCorrectAnswers = 0; // count of correct answers

  // check candidate answers
  for (let i = 0; i < questions.length; i++){
    correctAnswer = correctAnswers[i];
    candidateAnswer = candidateAnswers[i];
    //console.log(candidateAnswer);
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

function displayReport(quizGrade, quizCandidateName, quizQuestions, quizCandidateAnswers, quizCorrectAnswers){
// This function displays the user inputs and the results of the quiz.  Return value will be undefined.
  // display report header
  console.log(`\n-----------------------------\nCandidate Name: ${quizCandidateName}`);

  // display report body
  for (let i = 0; i < quizQuestions.length; i++){
    console.log(`\n${i+1}) ${quizQuestions[i]}`);
    console.log(`Your Answer: ${quizCandidateAnswers[i]}`);
    console.log(`Correct Answer: ${quizCorrectAnswers[i]
    }`);
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
  askQuestion(questions);

  //grade the quiz and then display the final grade report
  let finalGrade = gradeQuiz(this.candidateAnswers);

  // display the grade report
  displayReport(finalGrade, candidateName, questions,candidateAnswers, correctAnswers);
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