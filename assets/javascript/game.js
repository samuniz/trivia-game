// @ts-nocheck
var questionscounter= 0; 
var timer = 0; 
var score = 0;
var questionsList = [
    {   q: "Who name the first Jack O Lantern?",
        a1: "Jack ",
        a2: "John ",
        a3: "Jerry ",
        correct: "Jack"
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



// button.attr({
//     "class": "character", "type": "button", "id": array[i].id, "data-interval": array[i].interval, "data-attack": array[i].attack, "data-damage": array[i].damage

// }) 

// for (var i = 0; i < questions.length; i++) {
    

    // console.log(questions[2]); 
   // Start the Game 
    $("#start").on("click", function () {
        $("#start").remove();     
        
        for ( var i  = 0; i < questionsList.length; i++) {
            var newDiv = $("<div>");
            var optionsDiv= $("<div>")
            newDiv.append("<p>" + questionsList[i].q);
            newDiv.attr("data-correct", questionsList[i].correct);
            // newDiv.append(questions); 
            $("#questions").append(newDiv);  
           
    
            optionsDiv.append("<button>" + questionsList[i].a1 + "<button>" + questionsList[i].a2 + "<button>" + questionsList[i].a3);
            ;
            // newDiv.append(questions); 
            $("#options").append(optionsDiv); 
           
    }; 
    
    }); 
            
        
    

    // var userChoice = $(this).text();
    // console.log(userChoice);
    // if (userChoice === questions[questionIndex].correct) {
    //     correct++;
    //     }
// Display Questions on HTML
