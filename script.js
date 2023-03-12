const totalScore = {computerScore:0, playerScore:0}
function getcomputerChoice(){
    let sps = ['Stone', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random()*3)
    return sps[computerChoice]
}


function getResult(playerChoice,computerChoice){
    // let score
    let playerScore
    let computerScore
    if(playerChoice == computerChoice){
        // score = 0
        playerScore=0
        computerScore=0
    } else if(playerChoice == 'Stone' && computerChoice == 'Scissors'){
        // score = 1
        playerScore=1
        computerScore=0
    } else if(playerChoice == 'Paper' && computerChoice == 'Stone'){
        // score = 1
        playerScore=1
        computerScore=0
    } else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        // score = 1
        playerScore=1
        computerScore=0
    }else {
        // score = -1
        playerScore=-1
        computerScore=1
    }
    // return score
    return {playerScore,computerScore}
}
function displayResult(score, computerChoice, playerChoice, playerScore, computerScore ){
    const resultDiv = document.getElementById('result')
    const playerScoreDiv = document.getElementById('playerscore')
    const handsDiv = document.getElementById('hand')

    playerScoreDiv.innerText = `PlayerScore = ${playerScore}  ComputerScore = ${computerScore} `

    handsDiv.innerText = `🧑 ${playerChoice}  vs 🤖 ${computerChoice}`
    
    if(score == 1){
        resultDiv.innerText = 'You Win '
    } else if(score == -1){
        resultDiv.innerText ='You Lose '
    }else {
        resultDiv.innerText = 'You Drew  '
    }
}
function buttonClick(playerChoice){
    console.log({playerChoice})
    const computerChoice = getcomputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice,computerChoice)
    score.computerScore += score.computerScore
    score.playerScore += score.playerScore
    console.log({score})
    console.log({totalScore})
    displayResult(score, computerChoice, playerChoice, score.playerScore, score.computerScore)
}
function playGame(){
    const spsButton = document.querySelectorAll('.spsButton')

    spsButton.forEach(spsButton => {
        spsButton.onclick = () => buttonClick(spsButton.value)
    })

    const endGame = document.getElementById('endGame')
    endGame.onclick = () => endGame(totalScore)
}

function endGame(totalScore){
    totalScore['computerScore'] = 0
    totalScore['playerScore'] = 0
    const resultDiv = document.getElementById('result')
    const playerScoreDiv = document.getElementById('playerscore')
    const handsDiv = document.getElementById('hand')

    resultDiv.innerText = " "
    playerScoreDiv.innerText = " "
    handsDiv.innerText = " "
}
playGame()