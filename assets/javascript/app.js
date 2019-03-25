$(document).ready();

let correct = 0;
let clockRunning = false;
let time = 120;
console.log(time);

//start trivia game

//dynamic questions to display & correct answer for each question
const questionAnswer = [
    {
    "sequence": 1,
    "question": "Which Bruce Lee movie also stared Chuck Norris?",
    "possibleAnswers": ["I am Bruce Lee", "The Way of the Dragon", "Fist of Fury", " Enter the Dragon"],
    "correctAnswer": "The Way of the Dragon"
    },
    {
    sequence: 2,
    question: "Which Bruce Lee movie also stared Kareem Abdul-Jabbar?",
    possibleAnswers: ["The Big Boss", "Ironside", "Game of Death", "The Green Hornet"],
    correctAnswer: "Game of Death"
    },
    {
    sequence: 3,
    question: "What martial arts movie has won an Oscar?",
    possibleAnswers: ["Crouching Tiger, Hidden Dragon", "Ip Man", "Kill Bill Vol. 1", "Kung Fu Panda"],
    correctAnswer: "Crouching Tiger, Hidden Dragon"
    }
]



function reset() {
    time = 0;
    $("display").text("01:30");
}

function startTimer () {
    if(!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function count() {
    time--;
    const converted = timeConverter(time);
    console.log(converted);
    $("#display").text(converted);
}

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
  }

//start game
    $("#start").click(function() {

        //loop through each quesetion from the array of questions  
        for (i=0; i < questionAnswer.length; i++) {
        console.log(questionAnswer[i]);
        const triviaQuestions = $.makeArray(questionAnswer);
        //display the question and possible answers with radio button
        $(".question").text(questionAnswer.question);
        $(":radio").map(triviaQuestions, function(val, i) {
            console.log(triviaQuestion[i]);
        });
        //start timer for that question
        
    }
    });

//onclick determine if the user selected the correct answer && stop timer
//display whether the player got the question right or wrong
//if correct then add to the count of correct answers && call pause functin && display next question

//function for pause before displaying the next question
//window.setTimeout(out-your-function-here, milliseconds-here)


//button with function to restart the game
    //include reset of all variables

    //this ends the start function
//});