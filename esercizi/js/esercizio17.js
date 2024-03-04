/* Esercizio 17 - Crea una pagina web in cui è possibile vedere l’aggiornamento della data istantaneamente. In base alle ore del giorno stampa un saluto:
dalle 00 alle 02 -> Buona notte
dalle 02 alle 12 -> Buon giorno
dalle 12 alle 21 -> Buona sera */

let oraAttuale = new Date().getHours();
let minuti = new Date().getMinutes();
let secondi = new Date().getSeconds();
let tempo = oraAttuale + ':' + minuti.toPrecision() + ':' + secondi;

console.log(tempo);
//let cheOra = prompt('inserisci l\'ora: ');

let tempo1 = document.getElementById('tempo');




if (oraAttuale >= 12 && oraAttuale < 18) {
    console.log('Buon Pomeriggio sono le:' + tempo);
    tempo1.innerHTML = '<p>' + tempo + '</p>';
} else if (oraAttuale >= 18 && oraAttuale < 22) {
    tempo1.innerHTML = '<p> Buonasera sono le ore: ' + tempo + '</p>';
} else if (oraAttuale > 0 && oraAttuale <= 2) {
    tempo1.innerHTML = '<p>Buonanotte sono le ore: ' + tempo + '</p>';
} else {
    tempo1.innerHTML = '<p> Buongiorno sono le ore: ' + tempo + '</p>';
}
