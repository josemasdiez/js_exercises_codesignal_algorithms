// 5
/** Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below. */


// mi solucion fue dividir el area de los cuadrados en 4 partes y sumarle el centro 1
// pero primero teniamos que encontrar el valor de la primera parte
// como el centro no se cuenta se iniciaria con n - 1
// y despues emepzamos a quitarle de a 1 hasta llegar a cero
// sumamos esos valores y nos tiene que dar el valor de esa area
// despues es multiplicar  * 4 partes y sumarle en centro 1
function solution(n) {

    let x = n - 1
    let nw = x
    
    for(let i = 0; i < n-1; i++) {
        nw -= 1
        console.log(nw)
        x += nw
    }
    
    return (x*4) + 1
}
