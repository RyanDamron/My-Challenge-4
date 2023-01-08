var startEl = document.querySelector("#start")
var startMessage = document.querySelector("#start-message")
var hideQuestion = document.querySelector("#question")
var timeLeft = 60;
function hiddenQuestion() {
    document.getElementById('question').style.visibility = "hidden";

}
hiddenQuestion();

startEl.addEventListener("click", function (event) {
    event.preventDefault();
    startMessage.textContent = ('');
    showQuestion();
    document.getElementById('question').style.visibility = "visible";
    var timerEl = document.getElementById('countdown');

    function countdown() {
        

        var timeInterval = setInterval(function () {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + ' Seconds';
                timeLeft--;
            } else if (timeLeft === 1) {
                timerEl.textContent = timeLeft + ' Second';
                timeLeft--;
            } else {
                timerEl.textContent = "You did not pickle The Beast";
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    countdown();
    console.log(countdown);

})

var questionBank = [
    {
        question: "What is the name of Smalls' stepdad?",
        answers: ["Adam", "Bill", "Charles", "Doug"],
        correct: "Bill"
    },
    {
        question: "What song is playing when the boys are on the carnival ride?",
        answers: ["Twist and Shout", "Tossing and Turning", "The Twist", "Tequila"],
        correct: "Tequila"
    },
    {
        question: "According to Benny, what does Yeah-Yeah run like?",
        answers: ["a Duck", "a Horse", "a Cheetah", "a Turtle"],
        correct: "a Duck"
    },
    {
        question: "Which is NOT one of Babe Ruth's nicknames?",
        answers: ["The Great Bambino", "The Colossus of Clout", "Baby Ruthie", "The Sultan of Swat"],
        correct: "Baby Ruthie"
    },
    {
        question: "How many guys does Squints say The Beast ate while he was a guard dog?",
        answers: ["120", "185", "173", "150"],
        correct: "173"
    },

]
console.log(questionBank[0].question);

var currentQuestion = 0;
function showQuestion() {
    
    
    for (var i = 0; i < questionBank.length; i++){
        var stimulus = document.getElementById('question-text-1');
        stimulus.textContent = questionBank[currentQuestion].question;
        var correctAnswer = questionBank[currentQuestion].correct;
        console.log('Correct Answer:' + correctAnswer);
        var wrongNote = document.createElement("h4");
        var rightNote = document.createElement("h4");
    
        stimulus.append(wrongNote);
        wrongNote.textContent = ('');
        stimulus.append(rightNote);
        rightNote.textContent = ('');
    
    for (var i = 0; i < questionBank[currentQuestion].answers.length; i++) {
        console.log(questionBank[currentQuestion].answers[i]);
        var button = document.createElement("button");
        button.setAttribute("class", "input");
        button.setAttribute("class", "button");
        button.style.display = "block";
        button.textContent = questionBank[currentQuestion].answers[i];
        stimulus.append(button);
    }
        

    
        stimulus.addEventListener('click', function (event) {
            event.preventDefault();
            var userChoice = event.target.textContent;
            console.log('userchoice:' + userChoice);
            if (userChoice !== correctAnswer) {
                wrongNote.textContent = "You're Killing Me, Smalls!"
                timeLeft -= 15;
            } else {
                rightNote.textContent = "Heros Get Remembered, But Legends Never Die!"
            } 
           
            // this moved to a new question
            

        })
        questionBank.question ++;
        questionBank.correct ++;
        questionBank.answers ++;
        

        
    }
    return;
    // showQuestion();     
}   
            

    
    



    


    //create input elements in JS
    //append them to the page
    //set text content using for loop





