// 4
/** Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. */

//cermos nuevo array y almacenos el resultado de su multiplicacion y despues verificamos el valor mayor y retornamos
function solution(inputArray) {

    let newArray = []
    for(let i = 0; i < inputArray.length; i++) {
        
        let init = inputArray[i]
        let next = inputArray[i + 1]
        
        let product = init * next
        
        if(!isNaN(product)) newArray.push(product)
    }
    
    console.log(newArray)
    return Math.max(...newArray)
}
