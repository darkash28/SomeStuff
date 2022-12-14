
const result = {
    scoreUser : 0,
    scoreComputer: 0
}
let element = document.getElementById("result")


function play_game(user_choice){
   play(user_choice)
}

function play(user_choice){
    let computer_choice = computerChoice()
    console.log(computer_choice, user_choice)
    if (user_choice===computer_choice){
        tie()
    } else if (computer_choice === "Scissor" && user_choice === "Stone"){
        win()
    } else if (computer_choice === "Paper" && user_choice === "Scissor"){
        win()
    } else if (computer_choice === "Stone" && user_choice === "Paper"){
        win()
    } else{
        loose()
    }
    render()
}

function computerChoice(){
    let list = ["Paper", "Scissor", "Stone"]
    computer_choice = list[Math.floor(Math.random()*3)]
    return computer_choice
}

function win(){
    result.scoreUser +=1 
    element.textContent = "You win!"
}
function loose(){
    result.scoreComputer +=1
    element.textContent = "You loose!"
}
function tie(){
    element.textContent = "It's a tie"
}

function render(){
    let userScore = document.getElementById("user-score")
    let computerScore = document.getElementById("computer-score")
    userScore.textContent = "User Score: " + result.scoreUser
    computerScore.textContent = "Computer Score: " + result.scoreComputer
}