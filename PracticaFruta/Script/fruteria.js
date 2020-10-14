var cantidad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var frutas = ['sandia', 'naranja', 'melocotones', 'mandarina', 'manzana', 'platano', 'cerezas', 'kiwi', 'fresa', 'piña'];
function anadir(frutas1){
    var i;
    for(i = 0; i < frutas.length;i++){
        if(frutas[i] == frutas1){
            cantidad[i]+=1;
            kilos[i]+=1;
            break;
        }
    }
}