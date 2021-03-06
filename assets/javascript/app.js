$(document).ready(function() {

let correctCount = 0;
let incorrectCount = 0;
let clockRunning = false;
let time = 15;
let currentTime = 15;
// let hasAnswer = false;
let questionCounter = 0;
console.log(time);
reset();

//dynamic questions to display & correct answer for each question
const questionAnswer = [
    {
    question: "Which Bruce Lee movie also stared Chuck Norris?",
    possibleAnswers: ["I am Bruce Lee", "The Way of the Dragon", "Fist of Fury", "Enter the Dragon"],
    correctAnswer: "The Way of the Dragon"
    },
    {
    question: "Which Bruce Lee movie also stared Kareem Abdul-Jabbar?",
    possibleAnswers: ["The Big Boss", "Ironside", "Game of Death", "The Green Hornet"],
    correctAnswer: "Game of Death"
    },
    {
    question: "What martial arts movie has won an Oscar?",
    possibleAnswers: ["Crouching Tiger, Hidden Dragon", "Ip Man", "Kill Bill Vol. 1", "Kung Fu Panda"],
    correctAnswer: "Crouching Tiger, Hidden Dragon"
    },
    {
    question: "In which movie did Jet Li make his Hollywood debut?",
    possibleAnswers: ["Rush Hour", "Romeo Must Die", "Lethal Weapon 4", "Hard Target"],
    correctAnswer: "Lethal Weapon 4"
    },
    {
    question: "What was the primary martial arts style studied by Keanu Reeves for The Matrix?",
    possibleAnswers: ["Tai Chi", "Kung Fu", "Jiu Jitsu", "Muay Thai"],
    correctAnswer: "Kung Fu"
    }
]
//function to restart the game
    //include reset of all variables
function reset() {
    time = 15;
    $("#display").text("00:15");
    $("#question").empty();
    $("#answers").empty();
    $("#results").empty();
}
function resetQCount () {
    questionCounter = 0;
}

function startTimer() {
    if(!clockRunning) {
        //setTimeout instead of setInterval
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    } else if (time === 0 ) {
        clockRunning = false;
    }
};


function count() {
    if(time === 0) {
        $("#display").text("00:00");
    } else {
    time--;
    const converted = timeConverter(time);
    console.log(converted);
    $("#display").text(converted);
}
};

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  };

  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
    time = 15;
    $("#display").empty();
  }

function next() {
    //compare to see if the player's answer is correct
    //if correct then increment the correctCount
    stop();
    var radioValue = $("input[name='answer']:checked").val();
    console.log("radioValue is " + radioValue);
    console.log("Is this correct?" + questionAnswer[questionCounter].correctAnswer);
    if(radioValue == questionAnswer[questionCounter].correctAnswer) {
        correctCount++;
        console.log("Num correct answers " + correctCount);
        $("#question").text("You are correct!!!");
    } else {
        $("#question").text("You picked the wrong answer. The correct answer is " + questionAnswer[questionCounter].correctAnswer);
        incorrectCount++;
    }
};

//display question and answers
function displayQuestion() { 
    startTimer();
    $("#question").text(questionAnswer[questionCounter].question);
    for(j=0; j<questionAnswer[questionCounter].possibleAnswers.length; j++) {
        //couldn't get the radio buttons with the possibleAnswer text and the radio button values to generate in one line of code, so I had to use the following, would love feedback on how I could've done this better
    $("#answers").append('<input type="radio" name="answer" value="' + questionAnswer[questionCounter].possibleAnswers[j] + '">');
    $("#answers").append(questionAnswer[questionCounter].possibleAnswers[j] + "<br><br>");
    }
    console.log(questionAnswer[questionCounter].question);
    console.log(questionAnswer[questionCounter].possibleAnswers);
    console.log("this is correct answer" + questionAnswer[questionCounter].correctAnswer);
    console.log(questionCounter);
    };

    function results() {
        $("#results").append("'<p>You have completed the quiz! <br> Total Correct Answers: '" + correctCount + "'</p> <br> <p>Total Incorrect Answers: '" + incorrectCount);
        $("#question").empty();
        $("#answers").empty();
    }

    function checkTime() {
        var currentTime = time;
        console.log(time);
    }
    //realize this seems a little convoluted, but I ran out of time to clean up the two next functions
    function next2() {
        next();
        questionCounter++;
        if(questionCounter > 5) {
            ("#results").text("You must click the Start button to play again");
            reset();
            $("#answers").empty();
        } else if(questionCounter === 5) {
            results();
        }else if(questionCounter < 5) {
        console.log("Next clicked");
        $("#answers").empty();
        console.log(questionCounter);
        setTimeout(displayQuestion, 5000);
        console.log(correctCount);
        console.log(time);
            }
        }
//start game
$("#restart").click(function() {
    reset();
    resetQCount();
    displayQuestion();
});

    $("#start").click(function() {
        reset();
        startTimer()
        displayQuestion();
        //attempt to move to next question when time runs out
        setInterval(checkTime, 1000)
            if (seconds < 1) {
                next2();
            }
    });
//move to next question and restart the timer
    $("#next").click(function() {
    next2();
    });

    //this ends the document ready function
});