$(document).ready(function() {

let correctCount = 0;
let clockRunning = false;
let time = 10;
let hasAnswer = false;
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
    }
]
//function to restart the game
    //include reset of all variables
function reset() {
    time = 10;
    $("#display").text("01:00");
    if(questionCounter > 2) {
        questionCounter = 0;
    }
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
    if(time ===0) {
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

function next() {
    // hasAnswer = true;
    //compare to see if the player's answer is correct
    //if correct then increment the correctCount
    var radioValue = $("input[name='answer']:checked").val();
    console.log("radioValue is " + radioValue);
    if(radioValue = questionAnswer.correctAnswer) {
        correctCount++;
        console.log("Num correct answers " + correctCount);
    }
};

//display question and answers
function displayQuestion() { 

    $("#question").text(questionAnswer[questionCounter].question);
    for(j=0; j<questionAnswer[questionCounter].possibleAnswers.length; j++) {
        
    $("#answers").append('<input type="radio" name="answer" value=(questionAnswer[questionCounter].correctAnswer)>' + questionAnswer[questionCounter].possibleAnswers[j] + '</input><br><br>');
    }
    console.log(questionAnswer[questionCounter].question);
    console.log(questionAnswer[questionCounter].possibleAnswers);
    console.log("this is correct answer" + questionAnswer[questionCounter].correctAnswer);
    console.log(questionCounter);
    };

//start game
    $("#start").click(function() {
        //start timer for that question
        startTimer()
        displayQuestion();
    });
//move to next question and restart the timer
    $("#next").click(function() {
        console.log("Next clicked");
        next();
        questionCounter++;
        $("#answers").empty();
        console.log(questionCounter);
        displayQuestion();
        console.log(correctCount);
        reset();
        console.log(time);
    });

    //this ends the document ready function
});