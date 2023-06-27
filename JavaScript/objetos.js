// Un objeto es una variable con varias propiedades:
var miAuto = {
    marca: 'Renault',
    modelo: 2024,
    tipo: 'Electrico',
    // Metodo:
    // Propiedad con una funcion: 
    detalles: function() {
        console.log(`Auto: ${this.marca}, ${this.modelo}`)
    } 
}

// Para llamar una propiedad en especifico:
miAuto.marca
// Para llamar al metodo:
miAuto.detalles()

