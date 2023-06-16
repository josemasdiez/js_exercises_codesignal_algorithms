// 13
/** Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s. */

// la idea es por medio de una expresion regular buscar entre el texto palabras entre parentesis
// tuve un porblema con el division[0] me mostrab a un error al no ser definido
// por lo tanto me toco recorrer ese objeto que retorno el exec
// pero dentro de este mismo recorrido encuentro la palabra le doy reversa y despues la elimino del string original cosa de que cuando se vuelva a interar ya no este y busque la siguiente
function solution(inputString) {

    let expresion = /\(([\w]+)\)/g

    for(let i = 0; i <= inputString.length; i++) {
        
        let division = expresion.exec(inputString)
        if(division !== null) {
            for (const property in division) {
                let reverse = division[1].split('').reverse().join('');
                inputString = inputString.replace(division[0], reverse);
            }
        }
    }
    
    inputString = inputString.replace('(', '')
    inputString = inputString.replace(')', '')
    return inputString
    /*let result = /^[a-zA-Z]+$/g.test(inputString);
    console.log(result)
    if(result) {
        return inputString
    } else {
        return ''
    }*/
}
