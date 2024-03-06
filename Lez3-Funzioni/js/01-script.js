//DICHIARO UNA FUNZIONE

function saluta() {
    //nome e cognome sono variabili locali, cioe visibili solo all'interno della funzione stessa
    let nome = "Dario";
    let cognome = "Mennillo";
    console.log("ciao " + nome + " " + cognome);
}

//funzione e richiamo sono indipendenti
//richiamo la funzione per poter eseguire il codice all'interno del suo corpo
saluta();

// //provo ad accedere a nome e cognome dichiarati nella funzione
// console.log(nome);
// console.log(cognome);
//questo nome e cognome sono variabili globali, ovvero visibili ovunque
let nome="Pippo";
let cognome="Rossi";
//ATT: a parità di nome ha la precedenza la variabile locale

function salutaLaltro() {
    let cognome= "Verdi";
    //in questo caso nome è globale, cognome è variabile
    console.log(nome+" "+cognome);
}
salutaLaltro();

/* -------------------------------------------------------------------------- */
/*                               Esempio veloce                               */
/* -------------------------------------------------------------------------- */
let demo=document.getElementById("demo");

function salutaUser() {
    let username= window.prompt("Ciao Utente come ti chiami? ");
    demo.innerHTML='<h1> Ciao: '+ username+'</h1>';
}
salutaUser()

function salutaAntonio(){
    let saluta="saluta antonio"
    console.log(saluta);
}
salutaAntonio()