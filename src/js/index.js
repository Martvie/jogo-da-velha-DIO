var player, winner = null
var actualplayer = document.getElementById('select-player')
var playerWinner = document.getElementById('winner-player')
var winnerArea = document.getElementById('winner-area')
var squares = document.querySelectorAll('.square')

changePlayer('X')

squares.forEach(square => {
    square.addEventListener("click", function () {

        if (winner != null) {
            return
        }

        if (square.innerHTML === '.') {

            square.innerHTML = player
            square.style.color = '#000'

            if (player === 'X') {
                player = 'O'
            } else {
                player = 'X'
            }

            changePlayer(player)
            verifyWinner(squares)
        }
    })
})

function changePlayer(value) {
    player = value
    actualplayer.innerHTML = player
}

function verifyWinner(squares) {
    // função responsavel por verificar se algum jogador completou uma sequencia e venceu

    // Verificação linhas Horizontais
    if (checkSequence(squares[0], squares[1], squares[2])) {
        changeColor(squares[0], squares[1], squares[2])
        gameWinner(squares[0])
        return
    }
    if (checkSequence(squares[3], squares[4], squares[5])) {
        changeColor(squares[3], squares[4], squares[5])
        gameWinner(squares[0])
        return
    }
    if (checkSequence(squares[6], squares[7], squares[8])) {
        changeColor(squares[6], squares[7], squares[8])
        gameWinner(squares[6])
        return
    }

    // Verificação linhas Verticais
    if (checkSequence(squares[0], squares[3], squares[6])) {
        changeColor(squares[0], squares[3], squares[6])
        gameWinner(squares[0])
        return
    }
    if (checkSequence(squares[1], squares[4], squares[7])) {
        changeColor(squares[1], squares[4], squares[7])
        gameWinner(squares[1])
        return
    }
    if (checkSequence(squares[2], squares[5], squares[8])) {
        changeColor(squares[2], squares[5], squares[8])
        gameWinner(squares[2])
        return
    }

    // Verificação linhas Diagonais
    if (checkSequence(squares[0], squares[4], squares[8])) {
        changeColor(squares[0], squares[4], squares[8])
        gameWinner(squares[0])
        return
    }
    if (checkSequence(squares[6], squares[4], squares[2])) {
        changeColor(squares[6], squares[4], squares[2])
        gameWinner(squares[6])
    }
}

function changeColor(square1, square2, square3) {
    square1.style.backgroundColor = '#0e0'
    square2.style.backgroundColor = '#0e0'
    square3.style.backgroundColor = '#0e0'
}

function gameWinner(square) {
    winner = square.innerHTML

    winnerArea.innerHTML = 'O vencedor é:'
    playerWinner.innerHTML = winner
}

function checkSequence(square1, square2, square3) {
    if (square1.innerHTML != '.' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        return true
    }
}

function restartGame() {
    winner = null
    winnerArea.innerHTML = ''
    playerWinner.innerHTML = ''

    squares.forEach(square => {
        square.innerHTML = '.'
        square.style.backgroundColor = '#EEE'
        square.style.color = '#EEE'
    })

}