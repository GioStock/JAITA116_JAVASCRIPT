/* 
gli Array ci permettono di memorizzare un intero elenco di valori correlati tra loro, sono oggetti 0-based, cioe ad ogni elemento viene assegnato un indice partendo da 0.

Le parentesi quadre[] indicanp l'inizio e la fine dell'array
- ogni elemento p separato da virgole
- si possono aggiungere elementi di qualsiasi tipo(string,number,boolean, etc..)

*/

let mioArray = ['Milo',32];

//Quando un elemento in un array è un altro array, viene chiamato nested o annidato.

let docenti = [
    ["Milo", 'javascript'],
    ['Davide', 'Andrea']
    ]
console.log(docenti);

//si puo estrarre un singolo elemento specifico utilizzano la bracket notation, andando a richiamare l'indie dell array

let colori=['blu','rosso','verde','giallo','viola','rosa'];
let primoEl =colori[0];
let secondoEl=colori[1];

console.log(primoEl);
console.log(secondoEl);

/* -------------------------------------------------------------------------- */
/*                              cambiare elementi                             */
/* -------------------------------------------------------------------------- */
//oltre che per estrapolare un elemento, si puo usare l'indice per modificare l'array cambiando un elemento

colori[1]='Arancio';
console.log(colori);

/* -------------------------------------------------------------------------- */
/*                             aggiungere elementi                            */
/* -------------------------------------------------------------------------- */
//si possono aggiungere elementi alla fine di un array, con la funzione push

colori.push('Azzurro','Nero');
console.log(colori);

//se invece si volesse aggiungere un elemento all'inizio di un array, si puo fare con la funzione UNSHIFT.

colori.unshift('bianco')
console.log(colori);

/* -------------------------------------------------------------------------- */
/*                             rimuovere elementi                             */
/* -------------------------------------------------------------------------- */
//si puo rimuovere l'ultimo elemento di un array, con la funzione 'POP'
colori.pop();
console.log(colori);
//se invece si volesse rimuovere il primo elemento si utilizza 'SHIFT'

colori.shift();
console.log(colori);

colori.shift();
console.log(colori);
/* -------------------------------------------------------------------------- */
/*                                  ciclo for                                 */
/* -------------------------------------------------------------------------- */
/* 
il ciclo for, è un loop che esegue un blocco di codie per un numero determinato di volte deciso dalla sua condizione.
la sintassi prevede:

    - parola chiave for
    - parentesi tonde che contengono gli elementi necessari per porre la condizione
    - inizializzazione
    - condizione
    - aggiornamento
    - parentesi graffe che contengono il blocco di codice da eseguire finche la condizione viene rispettate.
*/
//il ciclo for seguente stampera i primi 5 elementi per l'array. Tra le parentesi tonde inizializza una variabile i (indice) e le da valore 0, con la condizione che questa variabile debba essere minore di 5 e ogni volta che la condizione viene rispettata esegue il blocco di codice ed incrementa di 1 il valore di i, quando il valore supererà a 4 la condizione non verrà piu rispettata e il blocco di codice non verra eseguito di nuovo.

for(let i=0; i < 5 ; i++){

    console.log(colori[i]);//stampa in consolo l'elemento dell'array con indice i.

}

//se volessimo stampare l'intero array, possiamo usare il metodo .length() questo perchè se mettiamo un numero fisso, ma l'array viene modificato con l'aggiunta o la rimozione degli elementi, non abbiamo la certezza che vengano stampati tutti oppure ci prova a stampare ppiù elementi di quanti ce ne siano e non trovandolo ci restituisce undefined.

for (let i = 0; i<colori.length;i++)
{
    console.log(colori[i]);
}
