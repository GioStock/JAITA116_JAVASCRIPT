/* -------------------------------------------------------------------------- */
/*                                    area                                    */
/* -------------------------------------------------------------------------- */
function calcolaArea(altezza, larghezza) {
    let area = altezza * larghezza;
    // console.log("L'area vale: "+ area);

    //la funzione puo anche restituirmi un valore
    return area;
}
//quando richiamo una funzione con parametri, glieli devo passare;
//salvo nella variabile area il valore che viene restituito dalla funzione
let superficie = calcolaArea(4, 6);
console.log(superficie);

console.log("il valore dell'area è: " + calcolaArea(9, 3));

/* -------------------------------------------------------------------------- */
/*                                   volume                                   */
/* -------------------------------------------------------------------------- */

function volume(altezza, larghezza, profondita) {
    //let volume= altezza*larghezza*profondita;
    if (altezza != null && larghezza != null && profondita != null) {
        //posso usare una funzione dentro l'altra
        let area = calcolaArea(altezza, larghezza);
        let volume = area * profondita;
        return volume;
    } else {
        return "stai mancando un dato";
    }
}

console.log("il volume vale: " + volume(5, 8, 9));

function calcolaVolume2(area,profondita) {
    let volume=area*profondita;
    return volume
}
//nel passare una funziona come parametro di un'altra funzione sto facendo una CALLBACK FUNCTION
console.log("il vol2: "+calcolaVolume2(calcolaArea(7,5),5));

/* -------------------------------------------------------------------------- */
/*                                   CLOSURE                                  */
/* -------------------------------------------------------------------------- */
//definire una funzione dentro l'altra per poter accedere a variabili locali piu esterne
function leggiNome(){
    let nome="Dario";
    function leggiCognome() {
        let cognome= "mennillo";
        return nome+" "+cognome
    }
    // console.log(cognome); non posso accedere a cognome
    return leggiCognome();
}
console.log(leggiNome());

