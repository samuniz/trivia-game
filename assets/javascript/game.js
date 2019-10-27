// @ts-nocheck
var questionsCounter = 0;

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
        c: "Jack",

    },
    {
        q: "Which american city holds the largest Halloween Parade in the United States?",
        a1: "Salem,MA",
        a2: "New York, NY",
        a3: "Denver, CO",
        c: "New York, NY",

    },
    {
        q: "Which year the movie Hocus Pokus released?",
        a1: "1991",
        a2: "1996",
        a3: "1993",
        c: "1993",
    },
    {
        q: "What's the most popular candy for Halloween?",
        a1: "Candy Corn",
        a2: "Chocolate",
        a3: "Gummy Bear",
        c: "Chocolate",
    },
    {
        q: "What's the meaning of Dracula ?",
        a1: "Son of Evil",
        a2: "Son of Darkness",
        a3: "Father of Evil",
        c: "Son of Evil",

    },
    {
        q: "Which American state does not allow dressing like priest or nuns?",
        a1: "Kansas",
        a2: "Texas",
        a3: "Alabama",
        c: "Alabama",
    },
    {
        q: "Who was the first actor to play Wolf Man?",
        a1: "Lon Chaney",
        a2: "Benicio Del Toro",
        a3: "Antony Hopkins",
        c: "Lon Chaney",
    },
    {
        q: "Who wrote the novel Frankenstein?",
        a1: "Agatha Christie",
        a2: "Mary Shelley",
        a3: "Stephen King",
        c: "Mary Shelley",
    },
    {
        q: "Which actor played Dr. Frank-n-Furter in The Rocky Horror Picture Show?",
        a1: "Tim Curry",
        a2: "Richard O'Brien",
        a3: "Peter Hinwood",
        c: "Tim Curry",
    },
    {
        q: "Which of these Halloween films was NOT directed by Tim Burton?",
        a1: "Beetlejuice",
        a2: "The Nightmare Before Christmas",
        a3: "Corpse Bride",
        c: "The Nightmare Before Christmas"
    }
];


// start the game
$("#start").on("click", function () {
    $("#start").remove(); 
   
    $("#showtime").show();
    setTimeout(function(){
        $("#showtime").hide();
    }, 3000);
    setTimeout(function(){
        $("#gameQuestions").show();
        displayQuestion()
    }, 3300);  
          

});

// Display one question at time
function displayQuestion() {
    if (questionsCounter < (questionsList.length)) {
        startClock(); 
        questionsCounter++;
        $("#questions").text(questionsList[(questionsCounter-1)].q);
        $("#a1").text(questionsList[(questionsCounter-1)].a1);
        $("#a2").text(questionsList[(questionsCounter-1)].a2);
        $("#a3").text(questionsList[(questionsCounter-1)].a3);
        
       
    }
    else if (questionsCounter === questionsList.length) {
        $("#gameQuestions").hide();
        $("timer").stopClock();
    }
};

 
$(".options").on("click", function(){ 
  
    stopClock();
    displayQuestion();  
    $("#gif").attr("src", `assets/images/${questionsCounter-1}.gif`);
    $("#gif").show(); 
    $("#gameQuestions").hide();    
    setTimeout(function(){  
        $("#gif").hide();      
        }, 3000);   
    setTimeout(function(){
    startClock();   
    $("#gameQuestions").css("display", "block");      
    }, 3300); 
    
    var userChoice = $(this).text();
    console.log(userChoice);
    if (userChoice == questionsList[questionsCounter].c) {
    score++
    console.log(score); 
    }         
  
});


  
    




/* ============CLOCK FUNCTIONS=============== */
// start the clock
function startClock() {
    time = 10;
    $("#timer").text("00:10");
    console.log(time)
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    } else {
        clearInterval(intervalId);
    }

}

// stop the clock
function stopClock() {

    clearInterval(intervalId);
    clockRunning = false;
    var converted = timeConverter(time);
    console.log(converted)
    //  $("#stopTime").text(converted);
}


// convert time on clock
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

// make the clock count
function count() {
    time--;
    var converted = timeConverter(time);
    // console.log(converted);
    $("#timer").text(converted);
    if (time === 0) {
        stopClock();
        $("#gameQuestions").hide();
        // $("#noTime").css("display", "block")
    };
};












// function startGame() {

//         var newDiv = $("<div id='" + i + "'>");

//         if (questionsList[i].active == true) {
//             newDiv = $("<div id='" + i + "'>");
//         }

//         newDiv.append("<p>" + questionsList[i].q + "</p>");
//         newDiv.attr("data-correct", questionsList[i].correct);

//         var optionsDiv = $("<div>")
//         optionsDiv.append("<button onclick=clickButton(" + i + ")>" + questionsList[i].a1 + "<button onclick=clickButton(" + i + ")>" + questionsList[i].a2 + "<button onclick=clickButton(" + i + ")>" + questionsList[i].a3);

//         newDiv.append(optionsDiv);

//         $("#questions").append(newDiv);




// }


