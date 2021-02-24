const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ",
  "True or false: 5000 meters = 5 kilometers? ",
  "(5+3)/2*10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];;
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
  return candidateName;
}

function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
  return candidateAnswers;  
}

function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numberOfCorrectAnswers = 0;
for (let i = 0; i< correctAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    console.log(`${i+1}) ${questions[i]} \nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
    numberOfCorrectAnswers += 1;

  } else{
    console.log(`${i+1}) ${questions[i]} \nYour Answer: ${candidateAnswers[i]} -incorrect\nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}
  let grade = "";
  let gradeValue = ((numberOfCorrectAnswers / correctAnswers.length) * 100);
  //console.log(numberOfCorrectAnswers);
  if (gradeValue >= 80){
    grade = String(gradeValue)
    status = "PASSED";
  } else{
    grade = String(gradeValue);
    status = "FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% ( ${numberOfCorrectAnswers} of ${correctAnswers.length} correct) <<<\n >>> Status: ${status} <<<`);

  return grade;
}

function runProgram() {
 
  // TODO 1.1c: Ask for candidate's name //
 console.log(`\n${askForName(candidateName)}, welcome to the Astronaut Program Training Quiz!\n`);

  askQuestion(questions);
  gradeQuiz(this.candidateAnswers);
  //console.log(grade);
  
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