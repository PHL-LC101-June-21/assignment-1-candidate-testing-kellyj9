const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = ""; // this is not currently used by the program, but I don't want to remove it since the program needs it

let correctAnswer = "";
let candidateAnswer= "";

// array of questions to ask the user; must be in this order.
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

// corresponding answers; must be in this order.
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = []; // will collect the candidate's answers

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  while (candidateName === ""){
  candidateName = input.question("What is your name? ");
  }
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(questions[i]);
    console.log("");

    // collect the answer
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`-----------------------------\nCandidate Name: ${candidateName}`);

  let countCorrectAnswers = 0; // will hold number of correct answers

  // check for the correct answers
  for (let i = 0; i < questions.length; i++){
    // start printing report
    console.log(`\n${i+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);

    correctAnswer = correctAnswers[i];
    candidateAnswer = candidateAnswers[i];

    // compare candidate's answer to correct answer
    if (candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()){ 
      // answer was correct; increment counter
      countCorrectAnswers +=1; 
    }
  }
  // calculate candidate's final grade:
  let grade = countCorrectAnswers / questions.length * 100; 

  // print report footer:
  console.log(`\n>>> Overall Grade: ${grade}% (${countCorrectAnswers} of ${questions.length} responses correct) <<<`);
  // print candidate's PASS or FAIL status
  if (grade >= 80){
    console.log(`>>> Status: PASSED <<<`);
  }
  else {
    console.log(`>>> Status: FAILED <<<`);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  // write a message to the console greeting the user using the name they just provided.
  console.log(`Greetings, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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