function modificarArray(){
    let cadena = prompt("Introduce números separados por el caracter /");
    let arrayNumeros = cadena.split("/");
    arrayNumeros.sort(function(num1, num2) {
        if(Number(num1) > Number(num2)){
            return -1;
        } else {
            return 1;
        }
    });
    alert(arrayNumeros.join("-"));
}