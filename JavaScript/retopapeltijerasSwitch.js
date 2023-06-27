var tijera = 'Tijera'
var piedra = 'Piedra'
var papel = 'Papel'

function juego(user,pc){
    switch(true){
        case user === tijera && pc === papel: {
            console.log('Ganaste con: ' + tijera)
        break}
        case user === tijera && pc === tijera: {
            console.log('Empate con tijeras')
        break}
        case user === piedra && pc === tijera: {
            console.log('Ganaste con: ' + piedra)
        break}
        case user === piedra && pc === piedra: {
            console.log('Empate con piedra')
        break}
        case user === papel && pc === piedra: {
            console.log('Ganaste con: ' + papel)
        break}
        case user === papel && pc === papel: {
            console.log('Empate con papel')
        break}
        default :{
            console.log('Perdiste :(')
        }
    }
}