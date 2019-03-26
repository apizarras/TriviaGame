$(document).ready();

let correctCount = 0;
let clockRunning = false;
let time = 60;
let hasAnswer = false;
console.log(time);
count();
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
    time = 60;
    $("display").text("01:00");
}

function startTimer () {
    if(!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    } else if (time === 0 ) {
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

function next() {
    hasAnswer = true;
    //compare to see if the player's answer is correct
    //if correct then increment the correctCount
    var radioValue = $("input[name='answers']:checked").val();
    if(radioValue = questionAnswer.correctAnswer) {
        console.log(questionAnswer.correctAnswer);
        correctCount++;
    }
}

// function letPlayerAnswer () {
//     if(time === 0) {
//         next();
//     console.log(time);
// } else if (hasAnswer) {
//     //check if answer is correct and then add to correct answer count
//     correctCount++;
// }
// };

//start game
$("#start").click(function() {
    //loop through each question from the array of questions
        for (i=0; i<questionAnswer.length; i++) {
        if (time === 0) {
            next();
        } else {
        console.log(questionAnswer[i].question);
        console.log(questionAnswer[i].possibleAnswers);
         //start timer for that question
            startTimer();
        //display the question and possible answers with radio button
        $("#question").text(questionAnswer[i].question);
            for(j=0; j<questionAnswer[i].possibleAnswers.length; j++) {
        $("#answers").html('<input type="radio" name="answer">' + questionAnswer[i].possibleAnswers[j] + '</input>');
        }
        //determine if user has answer the question and if not allow the timer to con't running down
                // letPlayerAnswer();
                // setInterval(letPlayerAnswer, 1000);
        // console.log("player has picked an answer");

        } 
       //on click should go back into the loop for the next question and timer reset
        $("#next").click(function() {
            console.log("Next clicked");
            next();
        });
        
           
        console.log(correctCount);
    }

        //stop timer and move to the next question
  
});


//onclick determine if the user selected the correct answer && stop timer
//display whether the player got the question right or wrong
//if correct then add to the count of correct answers && call pause function && display next question

//function for pause before displaying the next question
//window.setTimeout(out-your-function-here, milliseconds-here)


//button with function to restart the game
    //include reset of all variables

    //this ends the start function
