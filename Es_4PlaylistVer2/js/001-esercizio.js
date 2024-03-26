let utenti=[];
let utenteCorrente;
class Utente{
    /**
     * 
     * @param {*} nome 
     * @param {*} cognome 
     * @param {*} generePreferito 
     * @param {Canzone[]} playlist 
     */
    constructor(nome,cognome,generePreferito,playlist) {
        this.nome=nome;
        this.cognome=cognome;
        this.generePreferito=generePreferito;
        this.playlist=playlist;
    }

    
}
class Canzone{
    constructor(titolo,album,artista,link) {
        this.titolo=titolo;
        this.album=album;
        this.artista=artista;
        this.link=link;
    }
    stampaCanzone() {//creerà codice html
        let html = `<div> <a href="${this.link}"> Titolo: ${this.titolo} Album:  ${this.album} Artista:  ${this.artista}</div> </a> `;
        
        
        return html;
        
    }
}



function aggiungiUtente() {
    let nome=document.getElementById("nome");
    let cognome=document.getElementById("cognome");
    let generePreferito=document.getElementById("generePreferito");
    let titolo=document.getElementById("titolo");
    let album=document.getElementById("album");
    let artista=document.getElementById("artista");
    let link=document.getElementById("link");
    console.log(nome.value);


    let canzone=new Canzone(titolo.value, album.value,artista.value,link.value);
    let utente= new Utente(nome.value,cognome.value,generePreferito.value,canzone);
    utenteCorrente=utente;

    utenti.push(utente);
    // console.log(utenti);
    // console.log(utente);
    nome.value="";
    cognome.value="";
    generePreferito.value="";
    titolo.value="";
    album.value="";
    artista.value="";
    link.value="";


}
function aggiungiCanzoni() {
    utenteCorrente=utenti[0];
    if (utenteCorrente!=utenti) {
        console.log(utenteCorrente);
        stampaUtenti();
    }else{
       playlist= utenteCorrente.push(Canzone());
        console.log(playlist);
        

    }
    
}
let btnGenera=document.getElementById("btnGenera");
btnGenera.addEventListener("click",aggiungiUtente);
let playlist=document.getElementById("playlist");
let bottone=document.getElementById("bottone");
bottone.addEventListener("click",stampaUtenti);


function stampaUtenti() {
    
    utenti.forEach(utente => {
        playlist.innerHTML=`<p></p>`;
        playlist.innerHTML += `<div class="ut"> Nome: ${utente.nome} Cognome: ${utente.cognome} genere preferito: ${utente.generePreferito} Canzone: ${utente.playlist.stampaCanzone()}</div>`;
        if (utente.nome==""||utente.cognome==""||utente.generePreferito=="") {
            playlist.innerHTML=`<p>Non hai inserito correttamente l'utente, riprova</p>`;
            playlist.innerHTML+="";
            
        }
        
    });
}

