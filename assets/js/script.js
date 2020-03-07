var currentQuestion = 0;
var time = quizQuestions.length * 15;
var timerId;

var question = document.getElementById("quizQuestions");
var questionChoices = document.getElementById("questionChoices");
var startBtn = document.getElementById("startButton");
var timer = document.getElementById("currentTime");
var submit = document.getElementById("submit");
var nameEl = document.getElementById("name");

function quizStart() {
    var startingScreen = document.getElementById("startingScreen");

    timerId = setInterval(clockTick, 1000)

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
    currentQuestion.questionChoices.foreach(function (questionChoices, i) {
        var questionChoiceNode = document.createElement("button");
        questionChoiceNode.setAttribute("class", "questionChoice");
        questionChoiceNode.setAttribute("value", questionChoiceNode);
        questionChoiceNode.textContent = i + 1 + ". " + questionChoices;
        questionChoiceNode.onclick = clickQuestion;
        questionChoices.appendChild(questionChoiceNode);
    })
}

var responseEl = document.getElementById("response")
function clickQuestion() {
    if (this.value !== questions[currentQuestion].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }
        timer.textContent = time;

        responseEl.textContent("Incorrect!")
    } else {
        responseEl.textContent("Correct!")
    }
    responseEl.setAttribute("class", "response");
    setTimeout(function () {
        responseEl.setAttribute("class", "response hide");
    }, 1000);

    currentQuestion++;
    if (currentQuestion === questions.length) {
        quizEnd();
    } else {
        questionGet();
    }
}

function quizEnd() {
    clearInterval(timerId)

    var endingScreen = document.getElementById("endingScreen");
    endingScreen.removeAttribute("class");

    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = time;

    question.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timer.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    var name = nameEl.value.trim();

    if (name !== "") {
        var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            name: name
        };
        highscore.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscore));

        window.location.href = "quiz"
    }
}

startBtn.onclick = quizStart;