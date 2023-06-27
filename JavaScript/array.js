// Array: Estructura de datos que guarda diferentes valores
var frutas = ['Manzana', 'Pera', 'Uva', 'Kiwi']

// Cantidad de valores dentro del array:
console.log(frutas.length)

// Imprimir un valor en espefico:
console.log(frutas[3])

// Metodos (Interacciones con el array)
// Push (Add a new value at the end)
var nuevaFruta = frutas.push('Durazno')
console.log(frutas)

// Pop (Elimina ultimo valor) No se necesita especificar cual, con tal que sea la ultima, esta sera eliminada
var eliminarFruta = frutas.pop('Durazno')
console.log(frutas)

// Unshift (Add new value at the begin)
var nueva_Fruta = frutas.unshift('Guayaba')
console.log(frutas)

// Shift (Elimina primer elemento added) No se necesita especificar tampoco, lo hara automaticamente
var eliminar_Fruta = frutas.shift('Guayaba')
console.log(frutas)

// IndexOf (Busca posicion de un elemento) Se usa en caso que hallan muchos valores 
var buscaElemento = frutas.indexOf('Kiwi')
console.log(buscaElemento)
