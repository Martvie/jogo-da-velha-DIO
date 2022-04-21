var player, winner = null
var actualplayer =  document.getElementById('select-player')
var allsquares = document.getElementsByClassName('square')

let squares = document.querySelectorAll('.square')

changePlayer('X')

function selectSquare(id){
    let square = document.getElementById(id)

    square.innerHTML = player
    square.style.color = '#000'

    if(player === 'X'){
        player = 'O'
    } else {
        player = 'X'
    }

    changePlayer(player)
    verifyWinner(allsquares[0], allsquares[1], allsquares[2])


}

function changePlayer(value) {
    player = value
    actualplayer.innerHTML = player
}

function verifyWinner(square1, square2, square3){
    endGame = false

    if (square1.innerHTML != '.' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        endGame = true

        changeColor(square1, square2, square3)
    }
}

function changeColor(square1, square2, square3){
    square1.style.backgroundColor = '#0e0'
    square2.style.backgroundColor = '#0e0'
    square3.style.backgroundColor = '#0e0'
}
