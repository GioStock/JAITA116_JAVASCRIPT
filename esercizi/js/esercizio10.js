/* Esercizio 10 – Crea una funzione in javascript per generare una stringa di caratteri casuali specificandone la  lunghezza. Utilizza l’intero alfabeto e i numeri (form input)  */

let alfabetoNumeri = 'abcdefghijklmnopqrstuvwxyz0123456789';
let casuali='';
let lunghezza= 12;


for (let i = 0; i < lunghezza.length; i++) {
    
    let aCaso = Math.floor(Math.random()*alfabetoNumeri);
    casuali+= alfabetoNumeri.charAt(aCaso);

    return casuali;            
}

console.log(casuali);