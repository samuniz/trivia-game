// @ts-nocheck
var questionscounter = 0;
var clockRunning = false
var intervalId;
var timer = 0;
var score = 0;
var time = 0;
var questionsList = [
    {
        q: "Who name the first Jack O Lantern?",
        a1: "Jack ",
        a2: "John ",
        a3: "Jerry ",
        correct: "Jack",
        active: true
    },
    {
        q: "Which american city holds the largest Halloween Parade in the United States?",
        a1: "Salem,MA",
        a2: "New York, NY",
        a3: "Denver, CO",
        correct: "New York, NY",

    },
    {
        q: "Which year the movie Hocus Pokus released?",
        a1: "1991",
        a2: "1996",
        a3: "1993",
        correct: "1993",
    },
    {
        q: "What's the most popular candy for Halloween?",
        a1: "Candy Corn",
        a2: "Chocolate",
        a3: "Gummy Bear",
        correct: "Chocolate",
    },
    {
        q: "What's the meaning of Dracula ?",
        a1: "Son of Evil",
        a2: "Son of Darkness",
        a3: "Father of Evil",
        correct: "Son of Evil",

    },
    {
        q: "Which American state does not allow dressing like priest or nuns?",
        a1: "Kansas",
        a2: "Texas",
        a3: "Alabama",
        correct: "Alabama",
    },
    {
        q: "Who was the first actor to play Wolf Man?",
        a1: "Lon Chaney",
        a2: "Benicio Del Toro",
        a3: "Antony Hopkins",
        correct: "Lon Chaney",
    },
    {
        q: "Who wrote the novel Frankenstein?",
        a1: "Agatha Christie",
        a2: "Mary Shelley",
        a3: "Stephen King",
        correct: "Mary Shelley",
    },
    {
        q: "Which actor played Dr. Frank-n-Furter in The Rocky Horror Picture Show?",
        a1: "Tim Curry",
        a2: "Richard O'Brien",
        a3: "Peter Hinwood",
        correct: "Tim Curry",
    },
    {
        q: "Which of these Halloween films was NOT directed by Tim Burton?",
        a1: "Beetlejuice",
        a2: "The Nightmare Before Christmas",
        a3: "Corpse Bride",
        correct: "The Nightmare Before Christmas"
    }
];
// create the data attr in every correct option 





$("#start").on("click", function () {
    $("#start").remove();
    $("#questions").css("display", "block")
    startGame(); 
});




function startGame() {
    for (var i = 0; i < questionsList.length; i++) {
        var newDiv = $("<div style='display:none' id='" + i + "'>");
    
        if (questionsList[i].active == true) {
            newDiv = $("<div style='display: block' id='" + i + "'>");
        }
    
        newDiv.append("<p>" + questionsList[i].q + "</p>");
        newDiv.attr("data-correct", questionsList[i].correct);
    
        var optionsDiv = $("<div>")
        optionsDiv.append("<button onclick=clickButton(" + i + ")>" + questionsList[i].a1 + "<button onclick=clickButton(" + i + ")>" + questionsList[i].a2 + "<button onclick=clickButton(" + i + ")>" + questionsList[i].a3);
    
        newDiv.append(optionsDiv);
    
        $("#questions").append(newDiv);
    
    };
    

}
// runs thru each questions and when user clicks the buttons move to the next question
function clickButton(id) {
    questionsList.forEach(function (question) {
        if (question.active == true) {
            questionsList[id].answer = event.currentTarget.innerText;
            question.active = false;
            questionsList[id + 1].active = true;
            document.getElementById(id).style.display = 'none';
            document.getElementById(id + 1).style.display = 'block';
        }
    })
    console.log(questionsList[id])
}


    function start() {
        time = 10;
        $("#timer").text("00:10");
        console.log(time)
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }else{
            clearInterval(intervalId);
        }
        
    }
    
    function count() {
        time--;
        var converted = timeConverter(time);
        console.log(converted);
        $("#timer").text(converted);
        if (time === 0) {
            stop();
            $("#q_a").hide();
            $("#noTime").css("display", "block")
        }
    }
    function stop() {
        
        clearInterval(intervalId);
        clockRunning = false;
        var converted = timeConverter(time);
        console.log(converted)
        $("#stopTime").text(converted);
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