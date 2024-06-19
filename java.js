

let humanScore = 0
let computerScore = 0
let humanSelection
let compSelection


function playGame(){
    for (let i =0; i<5; i++){
    
        function playRound(humanChoice, compChoice){
        console.log(humanChoice)
        console.log(compChoice)

        humanChoice == compChoice? console.log("It's a Draw"): 
        humanChoice == 'Rock' && compChoice == 'Paper'? (computerScore ++, console.log("You Lose")):
        humanChoice == 'Paper' && compChoice == 'Scissors'? (computerScore ++, console.log("You Lose")):
        humanChoice == 'Scissors' && compChoice == 'Rock'? (computerScore ++, console.log("You Lose")): (humanScore ++, console.log("You Win"))

        console.log("Human Score = " + humanScore)
        console.log("Computer Score = " + computerScore)
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
    }
    computerScore>humanScore? console.log("Game Over. Compter Wins " + computerScore + "-" + humanScore):
    humanScore>computerScore? console.log("Game Over You Win! " + humanScore + "-" + computerScore):
    console.log("Game Over. It's a Draw " + humanScore + "-" + computerScore)
}


playGame()