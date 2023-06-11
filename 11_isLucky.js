// 11
/** Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not. */

// pirmero ccontamos los datos dividimos en 2, recorremos sumamos cada parte y despues comparamos
function solution(n) {

  const nString = n.toString();
  const nLength = nString.length;
  const half = parseInt(nLength) / 2
  let lado1 = 0
  let lado2 = 0

  for (let i = 0; i < nLength; i++) {

    if (half > i) {
      lado1 += parseInt(nString[i])
    } else {
      lado2 += parseInt(nString[i])
    }
  }

  return (lado1 == lado2)
}
