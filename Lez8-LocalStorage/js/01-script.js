/* 
    local storage e session storage permettono di salvare le coppie key/value del browser.
    le due archiviazioni hanno gli stessi metodi e proprietà:
    - setItem(key,value): memorizza la coppia key/value
    - getItem(key):       lettura del valore della key
    - removeItem(key):    rimuove la key e il relativo value
    - clear():            pulisce la localStorage
    - key(index):         lettura della key all'indice index
    - length:             il numero di oggetti archiviati


*/

//salvo un dato in localstorage
                    //chiave | valore
localStorage.setItem('nome','Giovanni');


console.log(localStorage.key(0));
console.log(localStorage.getItem('nome'));

//funzione che si occupa di guardare in localStorage per vedere se esiste un utente connesso
let nomeUser='Dario';
localStorage.setItem('nomeUtente',nomeUser);
function verificaSessione() {
    let utenteConnesso=localStorage.getItem('nomeUtente');
    if (utenteConnesso!=null) {
        console.log("Benvenuto "+utenteConnesso);
    }else{
        console.log("Esegui il login");
    }
}
document.addEventListener('DOMContentLoaded',verificaSessione);