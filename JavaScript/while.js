// Este loop funciona al igual que For pero su mecanismo es distinto:  Ya que este actua siempre y cuando se realice la condicion dada.
// Pasos: (Crear array y funcion previamente)
var frutas = ['Pera', 'Lulo', 'Sandia', 'Manzana']

function listaFrutas(fruta){
    console.log('Fruta: ' + fruta)
}
// 1. Su parametro sera la condicion 
while (frutas.length > 0){
    var fruta = frutas.shift()
    listaFrutas(fruta)
}
