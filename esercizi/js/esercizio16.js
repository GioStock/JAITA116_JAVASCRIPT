/* Esercizio 16 – Trova la parola all’interno del seguente testo: 
“Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java”, quando la trovi stampa la parola,  altrimenti stampa: “parola non trovata”. */

let stringa = ('Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java');
let stringa1 = stringa.split(' ');
let daTrovare = ('Java');
let trovata = true;
console.log(stringa1);
let altreParole='';

for (let i = 0; i < stringa1.length; i++) {

    if (stringa1[i] == daTrovare) {
        trovata = true;
        console.log('stampa: ' + daTrovare);
        
    } else if (stringa1[i] != daTrovare) {
        console.log(altreParole+=stringa1[i]);
    }
}
