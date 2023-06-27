// En este ejercicio, usando numeros el programa eliminara o add un nuevo estudiante usando while:
function solution(estudiantes, deathcount, nuevo) {
    while (deathcount > 0){
        estudiantes.pop();
        deathcount--;
    }
    estudiantes.push(nuevo)
    return estudiantes
}

solution(["Nico", "Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

