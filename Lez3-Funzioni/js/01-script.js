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
//let nome = "Pippo";
let cognome = "Rossi";
//ATT: a parità di nome ha la precedenza la variabile locale

function salutaLaltro() {
    var nome="Pippo";
    let cognome = "Verdi";
    //in questo caso nome è globale, cognome è variabile
    console.log(nome + " " + cognome);
}
salutaLaltro();

/* -------------------------------------------------------------------------- */
/*                               Esempio veloce                               */
/* -------------------------------------------------------------------------- */
let demo = document.getElementById("demo");

function salutaUser() {
    let username = window.prompt("Ciao Utente come ti chiami? ");
    demo.innerHTML = '<h1> Ciao: ' + username + '</h1>';
}
salutaUser()


function eta(){

for(let i=0; i<3;i++){
    console.log("ciao"+i);
    //uso let in un costrutto allora sto creando una variabile locale(presente solo in una funzione)
    let nomePersona="Anna";
    console.log(nomePersona);
    let etaUser=21;
    console.log("Età: "+etaUser);
    //uso var in un costrutto creo una variabile globale
    var cognomePersona="Bianchi";
    console.log(cognomePersona);
}
console.log(cognomePersona);//questa visibile dichiarata con var del for
console.log(nome);//questa non è visibile poiche dichiarata con let nel for
console.log(i);
}
eta();