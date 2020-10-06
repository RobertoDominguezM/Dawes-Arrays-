function pedirNombres() {
    let arrayNombres = [];
    let incluir = true;
    let nombre = "";
    let numero = 0;
    do {
        nombre = prompt("Introduce un nombre");
        numero = Number(prompt("Introduce la posición en la que incluir dicho nombre"));
        incluir = confirm("¿Estás seguro de incluir el nombre?");
        if (incluir) {
            if (numero >= 0) {
                arrayNombres[numero] = nombre;
            }
            if (numero < 0) {
                arrayNombres.push(nombre);
            }
        } else {
            if (numero > 0) {
                arrayNombres[numero] = "";
            }
            if (numero < 0) {
                arrayNombres.shift();
            }
        }
    } while (!isNaN(numero)); 
    console.log(arrayNombres);
}