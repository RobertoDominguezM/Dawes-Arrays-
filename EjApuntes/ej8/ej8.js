function mostrarContenido() {
    let titulares = Array.from(document.getElementsByClassName("titularNoticia"));
    titulares.forEach(titular => {
        let cadena = titular.innerHTML; 
        if (!cadena.includes("tr")) {
            alert(cadena);
        }
    });
}