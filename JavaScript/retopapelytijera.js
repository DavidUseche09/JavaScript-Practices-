var ob1 = 'piedra';
var ob2 = 'papel';
var ob3 = 'tijera'; 

var resultado = function(user, pc) {
    if (user != pc) {
        if (user === ob1 && pc === ob3) {
            console.log('Ganaste con: ' + ob1)
        }else if (user === ob2 && pc === ob1){
            console.log('Ganaste con: ' + ob2)
        }else if (user === ob3 && pc === ob2){
            console.log('Ganaste con: ' + ob3)
        }else{
            console.log('La computadora gano')
        }
    }
    else if (user === pc){
        console.log('Empate')
    }
};


// Segunda forma :

var user; 
var pc;

if (user == "Tijeras" && pc == "Papel"){
    console.log('Ganaste'); 
}
else if (user == "Piedra" && pc == "Tijeras"){
    console.log('Ganaste');
}
else if (user == "Papel" && pc == "Piedra"){
    console.log('Ganaste');
}
else if (user === pc){
    console.log('Empate');
}
else {
    console.log('Perdiste');
}
