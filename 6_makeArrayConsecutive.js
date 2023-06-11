// 6
/** Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.  */

// primero organizamos el array ya que sort puede no darnos el orden deseado
// despues verificamos cuantas interaciones tiene que hacer el for restando mayor y menor valor
// y por ultimo verificamos uno por uno si existe en el array si no suma a un valor needed que sera retornado
function solution(statues) {

    let needed = 0

    statues.sort(function(a, b) {
        return a - b
    })
    
    const min = statues[0]
    let next = min
    const max = statues[statues.length - 1]
    let interaciones = min - max
    interaciones = Math.abs(interaciones)
    
    for(let i = 0; i < interaciones; i++ ) {
        
        next += 1
        if(!statues.includes(next))
            needed++
    }
    
    return needed
}
