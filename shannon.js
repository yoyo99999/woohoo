var answer = "B";
var qnum = 1;
var questions = [
    "What comes after A?",
    "What comes after 4?",
    "What is the color of a banana?",
];
function CheckAnswer(){
    var myInp = document.querySelector("#s-answer").value;
    console.log(myInp);
    if(myInp === answer){
        document.querySelector("#s-result").innerHTML="<h1>Correct!</h1>";
        
       if(qnum === 1){
        qnum = 2;
        document.querySelector("#s-question h1").innerText = "Is 5 bigger than 4?";
        answer = "Yes";
    } else if(qnum === 2){
        qnum = 3;
        document.querySelector("#s-question h1").innerHTML = "What color is a banana?";
        answer = "Yellow";
    } 
     else if(qnum === 3){
        qnum = 4;
        document.querySelector("#s-question h1").innerHTML = "What school are you in right now?";
      answer = "BCIT";
    } 
    else if(qnum === 4){
        qnum = 5;
        document.querySelector("#s-question h1").innerHTML = "How many letters are in the word Java?";
      answer = "4";    
} 

else if(qnum === 4){
    qnum = 5;
    document.querySelector("#s-question h1").innerHTML = "How many letters are in the word Java?";
  answer = "4";    
} 


    }
else {
        document.querySelector("#s-result").innerText="Wrong!";
}
}