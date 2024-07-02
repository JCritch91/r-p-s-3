const buttons = document.querySelector(".buttons")
const selectionDisplay = document.querySelector(".selectionDisplay")
const humanCount = document.querySelector(".humanCount")
const compCount = document.querySelector(".compCount")
const roundResultDisplay = document.querySelector(".roundResultDisplay")

const rockButton = document.createElement("button")
rockButton.classList.add("rock")
rockButton.addEventListener('click', () => {
    if (humanScore + computerScore < 5){
    playGame('Rock')
    }
    return
})

const paperButton = document.createElement("button")
paperButton.classList.add("paper")
paperButton.addEventListener('click', () => {
    if (humanScore + computerScore < 5){
    playGame('Paper')
    }
    return
})

const scissorsButton = document.createElement("button")
scissorsButton.classList.add("scissors")
scissorsButton.addEventListener('click', () => {
    if (humanScore + computerScore < 5){
    playGame('Scissors')
    }
    return
})

buttons.appendChild(rockButton)
buttons.appendChild(paperButton)
buttons.appendChild(scissorsButton)

const resetButton = document.createElement("button")
resetButton.textContent = "Play Again"
resetButton.classList.add("reset")
resetButton.addEventListener('click', reset)

let humanScore = 0
let computerScore = 0
let compSelection



function playGame(humanChoice){

        function playRound(humanChoice, compChoice){

        roundResultDisplay.textContent = "You Chose " + humanChoice + ", Computer Chose " + compChoice
 
        humanChoice == 'Rock' && compChoice == 'Paper'? computerScore ++:
        humanChoice == 'Paper' && compChoice == 'Scissors'? computerScore ++:
        humanChoice == 'Scissors' && compChoice == 'Rock'? computerScore ++: humanScore ++
        humanCount.textContent = humanScore 
        compCount.textContent = computerScore
        }

        const compChoice = getCompChoice()

        function getCompChoice(){
            randomNumber = Math.floor(Math.random()*3)

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

        playRound(humanChoice, compSelection)

        if (humanScore + computerScore == 5){
            endResult()
            return
        }
    

}

function endResult(){
    buttons.replaceChildren()
    computerScore>humanScore? roundResultDisplay.textContent = "Game Over. You Lose..":
    humanScore>computerScore? roundResultDisplay.textContent =  "Game Over You Win!":
    roundResultDisplay.textContent = "Game Over. It's a Draw"
    buttons.appendChild(resetButton)
}

function reset(){
roundResultDisplay.textContent =''
humanCount.textContent ='0'
compCount.textContent ='0'
humanScore = 0
computerScore = 0
buttons.removeChild(resetButton)
buttons.appendChild(rockButton)
buttons.appendChild(paperButton)
buttons.appendChild(scissorsButton)
}
