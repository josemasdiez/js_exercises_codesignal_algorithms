// 8
/** After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0). */

// for del conteo total datos, damos valor filas y columnas, validaciones y sumas
function solution(matrix) {

    let numeroColumnas = matrix[0].length // 4
    const numeroFilas = matrix.length // 3
    const totalMatriz = numeroColumnas * numeroFilas
    let  columnas = 0
    let fila = 0
    let suma = 0
    for(let i = 1; i <= totalMatriz; i++ ) {
        
        let sisuma = false
        if(fila == numeroFilas){
            fila = 0            
            columnas++
        }
        
        if(matrix[fila][columnas] > 0) {
        
            let reversible = 0
            if(fila > 0){
                for(let x = fila; x > 0; x--) {
                    
                    reversible++;
                    if(matrix[fila-reversible][columnas] == 0) {
                        sisuma = false
                        break;
                    } else {
                        sisuma = true
                    }
                }
            } else {
                suma += matrix[fila][columnas]
            }
            
            if(sisuma) suma += matrix[fila][columnas]
        }

        fila++
    }
    
    return suma
}
