// DICTIONARY DEFINTIONS

var button = document.getElementById("searchBtn");
var searchedWord = document.getElementById("insertedItems");

//The dictionary / object that holds all.
var dictionary = {

    //ALREADY PUT IN WORDS FROM MR. C
    "yes":{
        //\n to push it down to the next line
       partOfSpeech: "Noun",
       definitions: "1. Used to give an affirmative response."+"\n2. Used as a response to someone addressing one or otherwise trying to attract one's attention."
    },
    "panacea":{
        //\n to push it down to the next line
        partOfSpeech: "Noun",
        definitions: "An answer or solution for all problems or difficulties."
    },
    "concatenation":{
        //\n to push it down to the next line
        partOfSpeech: "Noun",
        definitions: "A series of interconnected or interdependent things or events."
    },
    "saw":{
        //\n to push it down to the next line
        partOfSpeech: "Verb",
        definitions: "1. Cut (something) using a saw." + "\n2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
    },
    "found":{
        //\n to push it down to the next line
        partOfSpeech: "Adjective",
        definitions: "1. Having been discovered by chance or unexpectedly."+"\n2. (of a ship) Equipped; Supplied."
    },
    "crane":{
        //\n to push it down to the next line
        partOfSpeech: "Verb",
        definitions: "1. Stretch out one's body or neck in order to see something."+"\n2. Move (a heavy object) with a crane."
    },
    "minute":{
        //\n to push it down to the next line
        partOfSpeech: "Noun",
        definitions: "1. A period of time equal to sixty seconds or a sixtieth of an hour."+"\n2. A sixtieth of a degree of angular measurement (symbol: ʹ)"
    },
    "grotesque":{
        //\n to push it down to the next line
        partOfSpeech: "Adjective",
        definitions: "Comically or repulsively ugly or distorted."
    },
    "label":{
        //\n to push it down to the next line
        partOfSpeech: "Noun",
        definitions: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
    },
    "debacle":{
        //\n to push it down to the next line
        partOfSpeech: "Noun",
        definitions: "A sudden and ignominious failure; a fiasco."
    },

    //ADDED 20 WORDS
    "element":{
        //WORD 1
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A building block in a webpage."+"\nNormal Definition: A basic part of something whole."
    },
    "index":{
        //WORD 2
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A specific place in a string, list or array." + "\nNormal Definition: An indicator of something."
    },
    "array":{
        //WORD 3
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A data structure that holds multiple items." + "\nNormal Definition: Ordered list."
    },
    "loop":{
        //WORD 4
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A repetition of code." + "\nNormal Definition: A structure, series, or process, the end of which is connected to the beginning."
    },
    "syntax":{
        //WORD 5
        partOfSpeech: "Noun",
        definitions: "Coding Definition: Set of rules that govern the structure of a programming language." + "\nNormal Definition: Arrangement of words to create well-formed sentences."
    },
    "comment":{
        //WORD 6
        partOfSpeech: "Noun",
        definitions: "Coding Definition: Human-readable explanation in a source of code." + "\nNormal Definition: A verbal or written remark to express an opinion or reaction."
    },
    "expressions":{
        //WORD 7
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A combination of variables, operators, constants and functions that evaluate a single value." + "\nNormal Definition: Process of making known one's thoughts and feelings."
    },
    "variables":{
        //WORD 8
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A unit that can store data." + "\nNormal Definition: A element that is liable for change."
    },
    "integer":{
        //WORD 9
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A data type that holds a mathematical number." + "\nNormal Definition: A whole number."
    },
    "string":{
        //WORD 10
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A data type used to reprsent text." + "\nNormal Definition: A material consisiting of threads of cotton, hemp or other material twisted together to form a thin length."
    },
    "boolean":{
        //WORD 11
        partOfSpeech: "Noun and Adjective",
        definitions: "Coding Definition: A data type that can only be true or false." + "\nNormal Definition: Denoting a system of algebraic notation used to represent logical propositions."
    },
    "if-statement":{
        //WORD 12
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A programming construct that allows a program to run based on if conditions are met." + "\nNormal Definition: A computer science conditional that run codes based on if requirements are met."
    },
    "function":{
        //WORD 13
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A system of commands that can be reused together later in a program." + "\nNormal Definition: Activity natural to or intended for a person or thing."
    },
    "parameter":{
        //WORD 14
        partOfSpeech: "Noun",
        definitions: "Coding Definition: Special kind of variable used for a function to refer to one piece of data provided as input." + "\nNormal Definition: A measurable factor forming one of a set that defines a system or sets a condition of its operation."
    },
    "return":{
        //WORD 15
        partOfSpeech: "Noun and verb",
        definitions: "Coding Definition: Ends a function's operation and goes back to whatever called the command." + "\nNormal Definition: To go back."
    },
    "objects":{
        //WORD 16
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A data structure that contains fields and methods." + "\nNormal Definition: A material that can be seen and touched."
    },
    "visual hierarchy":{
        //WORD 17
        partOfSpeech: "Noun",
        definitions: "Coding Definition: Arrangement of elements in the order of importance." + "\nNormal Definition: Arrangement of items in the order of importance."
    },
    "html":{
        //WORD 18
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A set up of markup codes inserted in a file intended for display." + "\nNormal Definition: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages."
    },
    "css":{
        //WORD 19
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A coding language that controls the look and layout of a website." + "\nNormal Definition: Cascading Style Sheets--A style sheet language used for specifying the presentation of a document written in HTML."
    },
    "javascript":{
        //WORD 20
        partOfSpeech: "Noun",
        definitions: "Coding Definition: A programming language that allows developers to add interactivity to what they're developing." + "\nNormal Definition: Object oriented computer programming language used to make interactive effects."
    }

}

//FUNCTION 

function search(){

    //Div variables
    var overallContainer = document.getElementById("inputPushed");
    var containedItems = document.createElement("div");

    //Input
    var userInput = document.getElementById("input").value.toLowerCase();

    //Titles for the POS and Definitions
    var partOfSpeechTitle = document.createElement("p");
    var definitionTitle = document.createElement("p");

    //The things that will hold text
    var partOfSpeechPushed = document.createElement("p");
    var definitionPushed = document.createElement("p");
    var wordUnavailable = document.createElement("p");
    
    if(dictionary.hasOwnProperty(userInput)){

        //Append container
        overallContainer.appendChild(containedItems);
        containedItems.classList.add("containerStyle");

        //Append title
        containedItems.appendChild(partOfSpeechTitle);
        partOfSpeechTitle.innerText = "Part of Speech";

        //Append part of speech
        containedItems.appendChild(partOfSpeechPushed);
        partOfSpeechPushed.innerText = "- " + dictionary[userInput].partOfSpeech;

        //Append title
        containedItems.appendChild(definitionTitle);
        definitionTitle.innerText = "Definition";

        //Append definitions
        containedItems.appendChild(definitionPushed);
        definitionPushed.innerText = dictionary[userInput].definitions;

        console.log("Yessir!! It worked");
    }
    else{
        //Append container
        overallContainer.appendChild(containedItems);
        containedItems.classList.add("containerStyle");

        //Append the text to let the user know that it isn't available in the dictionary
        containedItems.appendChild(wordUnavailable);
        wordUnavailable.innerText = "Word is Unavailable!";
    }

}


//EVENT LISTENER

button.addEventListener("click", search);