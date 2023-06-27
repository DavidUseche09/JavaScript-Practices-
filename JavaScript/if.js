if (true) {
    console.log('primera opcion');
} else if (false) {
    console.log('segunda opcion')
} else {
    console.log('ultima opcion')
}

// Ejemplo :
var a = 18; 

if (a === 18) {
    console.log('Puedes votar desde ya')
}
else if (a > 18) {
    console.log('Es hora de votar de nuevo')
}
else {
    console.log('No puedes votar aun pa')
}

// Operador Ternario :
var numero = 1;

var resultado = numero === 1 ? 'Sou un uno' : 'No soy un uno';
