/* -------------------------------------------------------------------------- */
/*                                  FUNZIONI                                  */
/* -------------------------------------------------------------------------- */

// le funzioni ci permettono di scrivere codice riutilizzabile
//sono composte da:
/* 
        - parola chiave function
        - nome della funzione
        - una lista di parametri / argomenti tra parentesi tonde e separati da virgole
        - il blocco di codice da eseguire contenuto tra parentesi graffe

*/

function saluta() {
  console.log("ciao");
}

function chiediEta() {
  console.log("Quanti anni hai?");
}
function chiediProfessione() {
  console.log("che lavoro fai?");
}
function eseguiTutto() {
  saluta();
  chiediEta();
  chiediProfessione();
}

eseguiTutto();

/* -------------------------------------------------------------------------- */
/*                                    SCOPE                                   */
/* -------------------------------------------------------------------------- */
/* 
    è possibile dichiarare delle varibili all'interno delle funzioni. Queste variabili sono accessibili soltanto all'interno della funzione, hanno uno scope locale.
    Quindi lo scope (o ambiti di visibilità) di una variabile è la parte di uno script all'interno della quale si puo fare riferimento a essa.

*/
function benvenuto() {
  //variabili locali
  let username = "Giovanni";
  let messaggio = " Ciao " + username + ", benvenuto sul sito!";
  console.log(messaggio);
}
// console.log(messaggio); non è possibile dichiarare il log fuori dalla funzione
benvenuto(); //richiamo della funzione

/* -------------------------------------------------------------------------- */
/*                                  Parametri                                 */
/* -------------------------------------------------------------------------- */
/* 
    I Parametri sono dei segnaposto per valori che verranno poi assegnati alla funzione quando viene chiamata la funzione 
*/

function calcolaArea(altezza, larghezza) {
  let area = altezza * larghezza;
  return area; //ci restituisce la variabile area

}
let areaRett=calcolaArea(4,5);
console.log("l'area vale : "+ areaRett);
