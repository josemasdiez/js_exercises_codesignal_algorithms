// 9
/** Given an array of strings, return another array containing all of its longest strings. */

function solution(inputArray) {

    // contamos los caracteres de los string
    const stringsLength = inputArray.map((string) => string.length)
    // cuales tienen el maxxxximo valor
    const numeroMayor = Math.max(...stringsLength)
    // les sacamos el indice
    const stringsMax = stringsLength.map((number, index) => {
        if(number >= numeroMayor) return index
    })
    // del array que nos llega solo los indices mayores
    const arrStrings  = stringsMax.map((number) => inputArray[number])
    // filtrsmo para retirar los undefined
    const arrFiltrado = arrStrings.filter((string) => string !== undefined)
    
    return arrFiltrado
}
