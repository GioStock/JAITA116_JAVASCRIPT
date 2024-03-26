class Utente{
    constructor(nome,cognome,eta){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;

    }

}

let btnSub=document.getElementById("btnSub");

let elNome=document.getElementById("elNome");
let elCognome=document.getElementById("elCognome");
let elEta=document.getElementById("elEta");

let demo=document.getElementById("demo");
let feedback=document.getElementById("feedback");

function recuperaInfo() {
    let feed="";
    feedback.innerHTML="";
    demo.innerHTML="";

    let nome=elNome.value;
    let cognome=elCognome.value;
    let eta=elEta.value;

    if(nome!=""&&cognome!=""&&eta!=""){

    let mioUtente=new Utente(nome,cognome,eta);
    demo.innerHTML=stampaUtente(mioUtente);
}
    else{
        if (nome=="") {
            feed+="<p> dimenticato nome </p>"
        }
        if (cognome=="") {
            feed+="<p>hai dimenticato cognome</p>"
        }
        if (eta=="") {
            feed+="<p>hai dimenticato eta</p>"

        }
        feedback.innerHTML=feed;
    }
}
/**
 * 
 * @param {Utente} utente 
 */
function stampaUtente(utente) {
    let descrizione=`<p>Utente: ${utente.nome} ${utente.cognome} - ${utente.eta}</p>`;
 
    return descrizione;
}
let Utenti=[
    new Utente(elNome.value,elCognome.value,elEta.value)
];
Utenti.push(stampaUtente(Utente));
console.log(Utenti);

btnSub.addEventListener('click',recuperaInfo);