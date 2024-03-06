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

let colori=['verde', 'blu', 'viola', 'fuxia'];

for (let i = 0; i < 5; i++) {
    console.log(colori[i]);// stampa in console l'elemento dell'array con indice i;
}
console.log(colori[colori.length-1]);

for (let i = 1; i <= 100; i++) {
    if (i%3==0) {
        console.log('multiplo di 3: '+i);
    }else{
        console.log('bella: '+i);
    }
    

}

//tutti gli altri tipi di for
//nested statement

