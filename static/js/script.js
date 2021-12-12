// Challenge 1: Your Age in Days

function ageInDays() {
var birthYear = prompt("What year were you born... Good friend? ");
var ageInDayss = (2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old ')
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1); 
}


function reset() {
    document.getElementById('ageInDays').remove();
}


//Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/be6.gif"
    image.width = "250"
    div.appendChild(image);
}


// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
   console.log(yourChoice);
   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   botChoice = numberToChoice(ranToRpsInt());
   console.log("Computer choice:", botChoice);
   results = decideWinner(humanChoice, botChoice); // [0, 1]
   console.log(results);
 // message = finalMessage(results) // ['message': you won, 'color': green];
// rpsFrondEnd(yourChoice.id, botChoice, message);

}

function ranToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];

}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scisors' : {'paper': 1, 'scisors': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];


    return [yourScore, computerScore];
}