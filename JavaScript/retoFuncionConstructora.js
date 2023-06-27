function auto(marca,tipo,year){
    this.marca = marca;
    this.tipo = tipo;
    this.year = year;
}

var autos = []
for(i = 0; i < 5; i++) {
    var marca = prompt('Ingrese la marca del auto: ') 
    var tipo = prompt('Ingrese el tipo de auto: ')
    var year = prompt('Ingrese el year del auto: ')
    autos.push(new auto(marca, tipo, year))
}
for(i = 0; i < autos.length; i++) {
    console.log(autos[i])
}
