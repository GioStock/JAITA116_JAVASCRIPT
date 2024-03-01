/* 
    OPERATORI 
    un espressione è una combinazione di valori variabili e operatori che rappresentano un nuovo valore

    le espressioni si basano su elementi chiamati operatori che ci permettono di creare un unico valore a partire da uno o piu valori

    - operatori di assegnazione        =
    - operatori aritmetici             + , -, *, / , ++ , -- , %(sta per resto) .
    - operatori per stringhe           +
    - operatori di confronto           < , <=, >, >=, == , !=  .
    - operatori logici                 AND(&&), OR(||),  NOT(!) .
*/
// semplici operazioni
let somma= 10+5;
let sottrazione = 10-5;
let moltiplicazione = 10*5;
let divisione = 10/5;
console.log(somma, sottrazione, moltiplicazione, divisione);

//possiamo anche incrementare di unita un valore numerico in una variabile senza per forza scrivere +1
let aggUno=89;
aggUno++;
console.log(aggUno);

//si puo fare la stessa cosa per decrementare
let sottUno=98
sottUno--
console.log(sottUno);

// possiamo utilizzare js per calcolare il resto. questa operazione puo essere usata anche per determinare se un numero è pari o dispari: se dividendo un valore per 2 il risulato è un numero intero, allora il numero è pari.
let resto;
resto= 11%2; //il 3 sta 3 volte nell'11, 3+3+3=9, per arrivare a 11 manca 2, quindi il risultato è 2
console.log(resto);

// essendo una pratica comune quella di agigungere sottrarre etc.. un numero al valore di una variabile esiste un modo veloce per ottenere il risultato

let a=3;
let b=17;
let c=12;
let d=5;
//-----------------------------------------------------------//
//metodo lungo

a = a + 12;
b = b - 9;
c = c * 7;
d = d / 2;
console.log(a,b,c,d);

//metodo veloce

a+=12;
b-=9;
c*=7;
d/=2;
console.log(a,b,c,d);
/* -------------------------------------------------------------------------- */
/*                                 esercizio 1                                */
/* -------------------------------------------------------------------------- */
//Chiediamo all'utente in che anno è nato e diciamogli quanti anni ha

let nascita=prompt('in che anno sei nato?');
let now= 2024;
let eta = now-nascita;
let messaggio='<h2> quest\'anno avrai '+eta+' anni</h2>';

console.log(eta);
document.write(messaggio);



/* -------------------------------------------------------------------------- */
/*                                 Esercizio 2                                */
/* -------------------------------------------------------------------------- */
//scrivere un programma che calcola il perimetro e l'area di un triangolo avente i lati della seguente lunghezza: 5,6,7.

let aT=5;
let bT=6;
let cT=7;

let perimetro=aT+bT+cT;

//per cercare l'area sqrt sarebbe la radice quadrata
let semiPerimetro=perimetro/2;
let area= Math.sqrt(semiPerimetro*((semiPerimetro-aT)*(semiPerimetro-bT)*(semiPerimetro-cT)));

console.log('il tuo perimetro è '+perimetro, 'la tua area è '+area);

