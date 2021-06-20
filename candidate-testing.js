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
  while (candidateName === ""){
    candidateName = input.question("What is your name? ");
  }
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
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
  // NOTE: diplays functionality moved to function displayReport(grade).  This function only computes the grade
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

function displayReport(grade){
//
  // display report header
  console.log(`-----------------------------\nCandidate Name: ${candidateName}`);

  // display report body
  for (let i = 0; i < questions.length; i++){
    console.log(`\n${i+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]
    }`);
  }

  // display report footer:
  console.log(`\n>>> Overall Grade: ${grade}% (${grade*(questions.length/100)} of ${questions.length} responses correct) <<<`);
  if (grade >= 80){
    console.log(`>>> Status: PASSED <<<`);
  }
  else {
    console.log(`>>> Status: FAILED <<<`);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // write a message to the console greeting the user using the name they just provided.
  console.log(`Greetings, ${candidateName}!\n`);
  askQuestion();
  //grade the quiz and then display the final grade report
  let finalGrade = gradeQuiz(this.candidateAnswers);
  displayReport(finalGrade);
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