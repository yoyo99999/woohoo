var answer = "B";
var qnum = 1;
var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What is the color of an orange?",
    "What sound does a cat make?",
    "where does honey come from?"
];

var answers = [
    "B",
    "yes",
    "orange",
    "meow",
    "honey"
];

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if(myInp === answer){
       document.querySelector("#results").innerHTML = "<h2>Correct!</h2>";

       if(qnum ===1){
        qnum =2;
       document.querySelector("#question h1").innerText = "Is 5 bigger than 4?";
       answer = "yes";
    } else if (qnum === 2){
        qnum = 3;
        document.querySelector("#question h1").innerText = "What is the color of an orange?"
        answer = "orange"
    } else if (qnum ===3){
        qnum = 4;
        document.querySelector("#question h1").innerText = "What sound does a cat make?"
        answer = "meow"
    } else if (qnum ===4){
        qnum = 5;
        document.querySelector("#question h1").innerText = "Where does honey come from?"
        answer = "bees"
    }
    } else {
        document.querySelector("#results").innerHTML = "<h1> Wrong :( </h1>";
    }
}