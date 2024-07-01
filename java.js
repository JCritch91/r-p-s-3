const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const selectionDisplay = document.querySelector(".selectionDisplay")
const roundResultDisplay = document.querySelector(".roundResultDisplay")
const roundScoreDisplay = document.querySelector(".roundScoreDisplay")
const overallResultDisplay = document.querySelector(".overallResultDisplay")

let humanScore = 0
let computerScore = 0
/* let humanSelection */
let compSelection





function playGame(humanChoice){

        function playRound(humanChoice, compChoice){

        selectionDisplay.textContent = "You Chose " + humanChoice + ", Computer Chose " + compChoice

        humanChoice == compChoice? roundResultDisplay.textContent = "It's a Draw": 
        humanChoice == 'Rock' && compChoice == 'Paper'? (computerScore ++, roundResultDisplay.textContent = "You Lose"):
        humanChoice == 'Paper' && compChoice == 'Scissors'? (computerScore ++, roundResultDisplay.textContent = "You Lose"):
        humanChoice == 'Scissors' && compChoice == 'Rock'? (computerScore ++, roundResultDisplay.textContent = "You Lose"): (humanScore ++, roundResultDisplay.textContent = "You Win")

        roundScoreDisplay.textContent = "Human Score = " + humanScore +" , Computer Score = " + computerScore
        }

        const compChoice = getCompChoice()
/*         const humanChoice = getPlayerChoice() */



/*         function getPlayerChoice() {
            let selection = prompt()
            humanSelection = selection.substring(0,1).toUpperCase() + selection.substring(1).toLowerCase()
            return
        } */

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
        }
    

}

function endResult(){
    computerScore>humanScore? overallResultDisplay.textContent = "Game Over. Compter Wins " + computerScore + "-" + humanScore:
    humanScore>computerScore? overallResultDisplay.textContent =  "Game Over You Win! " + humanScore + "-" + computerScore:
    overallResultDisplay.textContent = "Game Over. It's a Draw " + humanScore + "-" + computerScore
}



rockButton.addEventListener('click', () => {
    playGame('Rock')
    return
})

paperButton.addEventListener('click', () => {
    playGame('Paper')
    return
})

scissorsButton.addEventListener('click', () => {
    playGame('Scissors')
    return
})