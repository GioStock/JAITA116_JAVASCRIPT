//Esercizio 10 – Crea una funzione in javascript per generare una stringa di caratteri casuali specificandone la  lunghezza. Utilizza l’intero alfabeto e i numeri (form input)  

let lunghezza = 16;
let alfabetoNumeri = 'abcdefghijklmnopqrstuvwxyz0123456789';
let casuali = '';
let password= document.getElementById('password');

for (let i = 0; i < lunghezza; i++) {

    let aCaso = Math.floor(Math.random() * alfabetoNumeri.length);
    casuali += alfabetoNumeri.charAt(aCaso);


}

console.log('ecco a te la tua password crittografata: '+casuali);
password.innerHTML=('ecco la tua password random: '+ casuali);
