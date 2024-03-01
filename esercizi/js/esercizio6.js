/* //Esercizio 6 – Scrivere un programma che crea una nuova stringa, a partire da una fornita, aggiungendo due  lettere iniziali: Ja. Se la parola fornita comincia con Ja allora verrà semplicemente restituita senza aggiunta 
Es: Torino 🡪 JaTorino Javascript 🡪 Javascript  */


let stringa= 'VaMeglio';
let string='Ja';


if (stringa.includes(string)) {
    console.log(stringa);
} else {
    console.log(string+stringa);
}