// Creamos un Array
var hermanos = ['Mario', 'Rodrigo', 'Mateo', 'Luis', 'Jorge', 'Oliver']

// Creamos una funcion  que salude a cada hermano
function saludarHermanos(hermano) {
    console.log('Hola hermano!, ' + hermano);
}

// Creamos un bucle que saludara a cada hermano del Array
// 3 Pasos: 1. Especificar desde que posicion empezara... creando una variable con el digito "0".
// 2. Darle estructura al loop creando proceso (finalizara cuando sea mayor que el length del array)
// 3. Aumentara 1 despues de cada loop 
// 4. Por ultimo, llamamos la funcion que llevara acabo la tarea
for (var i = 0; i < hermanos.length; i++){
    saludarHermanos(hermanos[i]);    
}




