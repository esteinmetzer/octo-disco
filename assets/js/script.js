var currentQuestion = 0;
var time = quizQuestions.length * 15;
var timer;

var question = document.getElementById("quizQuestions");
var questionChoices = document.getElementById("questionChoices");
var startBtn = document.getElementById("startButton");
var timer = document.getElementById("currentTime");
var submit = document.getElementById("submit");
var name = document.getElementById("name");

function quizStart() {
    var startingScreen = document.getElementById("startingScreen");

    timer = setInterval(clockTick, 1000)

    timer.textContent = time;

    startingScreen.setAttribute("class", "hidden");

    questions.removeAttribute("class");

    questionGet();
}

function questionGet() {
    var currentQuestion = question[currentQuestion];
    var questionTitle = document.getElementById("titleOfQuestions");
    questionTitle.textContent = currentQuestion.title;

    questionChoices.innerHTML = "";
    currentQuestion.questionChoices
}