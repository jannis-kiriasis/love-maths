// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    //Take all button elements in an array = []. There are 5 button elements
    let buttons = document.getElementsByTagName("button");

    //Return each element in the array which will be stored in the variable button on each iteration
    for (let button of buttons) {
        // when a button is clicked run this function
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "Submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkanswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}



function displaySubtractQuestion() {

}

function displayMultiplyQuesiton() {

}

