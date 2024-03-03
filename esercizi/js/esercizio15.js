/* // Esercizio 15 – Scrivi un programma per pescare un elemento a caso in un array di numeri 

let array2= array.pop();//estrae l'ultimo
console.log(array2);
array2= array.shift();//estrae il primo
console.log(array2);
let array3=array.indexOf();
console.log(array3); */

let array=[1,2,3,4,5,6,7,12];
let pesca= Math.floor(Math.random()*array.length);
let pescatore= array[pesca];
console.log('il numero pescato random è: '+pescatore);