// 2
/** Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc. */

// se le resta el uno en caso de que el año sea carrado ejemplo 1700
function solution(year) {
    return Math.floor((year-1)/100) + 1;
}
