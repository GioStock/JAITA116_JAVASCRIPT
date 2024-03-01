/* Esercizio 9 – Scrivi un programma che accetta una frase come parametro e imposta in upper-case l’iniziale  di ogni singola parola  */
let frase = 'scrivi una frase'.split(' ');
let nuovaFrase='';
console.log(frase);

for (let i = 0; i < frase.length; i++) {
    let maiusc=frase[i][0].toUpperCase();
     let restoParola= frase[i].substring(1);
     nuovaFrase+= maiusc+restoParola+' ';
}

console.log(nuovaFrase);