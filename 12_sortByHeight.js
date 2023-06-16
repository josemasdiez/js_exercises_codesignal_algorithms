// 12
/** Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall! */

// lo primero es convetir los -1 en un numero mayor al numoer maximo del array
// despues lo recorremos y vamos creando un nuevo array insertando los datos ya en orden
// para evitar que el Math.min nos traiga el mismo valor esa misma casilla del array la convertimos a un numero mayor +2 al max
function solution(a) {

    let newArr = []
    let max = Math.max(...a);
    const map1 = a.map((x) => {
        if(x == -1) {
            return max + 1
        } else {
            return x
        }
    });

    for(let i=0; i<a.length; i++) {
        
        if(map1[i] == (max+1)) {
            newArr.push(-1)
        } else {
            let minCurrent = Math.min(...map1);
            newArr.push(minCurrent)
            map1[map1.indexOf(minCurrent)] = (max)+2;
        }
    }
    
    return newArr
}
