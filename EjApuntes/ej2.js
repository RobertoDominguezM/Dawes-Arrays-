function manipularElementosDeCostura() {
    let elementosDeCostura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];
    elementosDeCostura.splice(1,1);
    console.log(elementosDeCostura);
    elementosDeCostura.splice(2,0,"hilo torzal");
    console.log(elementosDeCostura);
    elementosDeCostura.splice(3,1,"cúter rotatorio", "mesa de corte");
    console.log(elementosDeCostura);
    let primerosElementos = elementosDeCostura.slice(0,3);
    let ultimosElementos = elementosDeCostura.slice(3, 6);
    ultimosElementos.unshift("remalladora");
    ultimosElementos.splice((ultimosElementos.length-1),0, "cinta métrica");
    console.log(elementosDeCostura);
    console.log(primerosElementos);
    console.log(ultimosElementos);
}