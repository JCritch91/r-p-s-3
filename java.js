

let humanScore = 0
let computerScore = 0
let humanSelection
let compSelection




function playRound(humanChoice, compChoice){
console.log(humanChoice)
console.log(compChoice)

humanChoice == compChoice? console.log("It's a Draw"): 
humanChoice == 'Rock' && compChoice == 'Paper'? console.log("You Lose"):
humanChoice == 'Paper' && compChoice == 'Scissors'? console.log("You Lose"):
humanChoice == 'Scissors' && compChoice == 'Rock'? console.log("You Lose"): console.log("You Win")
}

const compChoice = getCompChoice()
const humanChoice = getPlayerChoice()



function getPlayerChoice() {
    let selection = prompt()
    humanSelection = selection.substring(0,1).toUpperCase() + selection.substring(1).toLowerCase()
    return
}


function getCompChoice(){
    randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)

    switch (randomNumber){
        case 0:
            compSelection = 'Rock'
        break;
    
        case 1:
            compSelection = 'Paper'
        break;
    
        case 2:
            compSelection = 'Scissors'
        break;
    }
    return 
}

playRound(humanSelection, compSelection)