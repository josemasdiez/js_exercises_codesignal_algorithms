// 7
/** Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. */

// no lo hagan con 2 for porque no pasa por tiempo
// la idea es validar errores y ir sacando los que cumplan con 2 errores de secuencia o que decartando un valor el siguiente a este sea menor ya no nos serviria
function solution(sequence) {
    
  let error = 0;
  
  for (let i = 0; i <= sequence.length; i++) {
    
    if (sequence[i] >= sequence[i+1]) {
      error++;
      // si existen 2 numeros desencajados no seguirr
      if (error == 2) return false;
      // segundo golpe en caso de que solo lleve un un error
      if (sequence[i-1] >= sequence[i+1] && sequence[i] >= sequence[i+2]) return false;
    }
  }
  
  return true;
}