// Este funciona al igual que un For normal pero es mas sencillo y con diferente mecanismo:
var helados = ['Fresa', 'Limon', 'Vainilla', 'Cookies & Cream', 'Chocolate']

function listaHelados(helado){
    console.log('Helado de: ' + helado)
}

for(var helado of helados){
    listaHelados(helado);
}
