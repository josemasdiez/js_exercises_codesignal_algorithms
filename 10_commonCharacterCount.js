// 10
/** Given two strings, find the number of common characters between them. */

function solution(s1, s2) {

    let concidencias = 0

    for(let i= 0; i < s1.length; i++) {
        
        // indenficamos si existe y nos devulve el primer index
        let c = s2.indexOf(s1[i]);
        // ese index lo borramos de la cadena para no volver a buscarlo
        s2 = s2.replace(s2[c], '')
        // si no es -1 fue porque encontro algo entonces lo contamos
        if(c >= 0) concidencias++
    }
    
    return concidencias
}