function iniciarCalculo(){
    let resultado = 0;
    let funcion= "";
    const numero = Number(prompt("Introduce un número"));
    //1
    resultado = calcularCubo(numero);
    console.log("El cubo de " + numero + " es " + resultado);
 
    //2
    funcion = function(num) {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("El cubo de " + numero + " es " + resultado);
 
    //3
    funcion = (num) => {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("El cubo de " + numero + " es " + resultado);
 
    //4
    funcion = num => num * num * num;
    resultado = funcion(numero);
    console.log("El cubo de " + numero + " es " + resultado);
}
 
function calcularCubo(numero) {
    return numero * numero * numero;
}