// 3
/** Given the string, check if it is a palindrome.*/

// 1 convertimos en array, lo reversamos (atras hacia adelante) convertimos de nuevo a array
// por ultimo comparamos los datos
function solution(inputString) {

    let reverseString = inputString.split('').reverse().join('')
    
    return inputString === reverseString
}