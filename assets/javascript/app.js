$(document).ready();

let correctCount = 0;
let clockRunning = false;
let time = 60;
console.log(time);

const questions = $(".question");
const submit = $("submit");

//start trivia game

//dynamic questions to display & correct answer for each question
const questionAnswer = [
    {
    question: "Which Bruce Lee movie also stared Chuck Norris?",
    possibleAnswers: {
        a: "I am Bruce Lee", 
        b: "The Way of the Dragon", 
        c: "Fist of Fury", 
        d: " Enter the Dragon"},
    correctAnswer: "b"
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
    // let hasAnswer = false;

    //loop through each quesetion from the array of questions
    // if(!hasAnswer){
        for (i=0; i < questionAnswer.length; i++) {
        startTimer();
        console.log(questionAnswer[i].question);
        console.log(questionAnswer[i].possibleAnswers);
    //display the question and possible answers with radio button
        $("#question").text(questionAnswer[i].question);

        console.log(time);
        if(time > 0) {
            //wait for the player to click on a radio button or wait for the time to run out
            break;
        } else if (time === 0) {
            hasAnswer = false;
            console.log("Time is Out!!!");
        }
    // }
    };
    //start timer for that question
    
})


//onclick determine if the user selected the correct answer && stop timer
//display whether the player got the question right or wrong
//if correct then add to the count of correct answers && call pause functin && display next question

//function for pause before displaying the next question
//window.setTimeout(out-your-function-here, milliseconds-here)


//button with function to restart the game
    //include reset of all variables

    //this ends the start function
