var player = null
var actualplayer =  document.getElementById('select-player')

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
}

function changePlayer(value) {
    player = value
    actualplayer.innerHTML = player
}