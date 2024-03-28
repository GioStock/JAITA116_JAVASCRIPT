let nome=document.querySelector("#nome")
let feedNome=document.querySelector("#feedNome")

let cognome=document.querySelector("#cognome")
let feedCognome=document.querySelector("#feedCognome")

let email=document.querySelector("#email")
let feedEmail=document.querySelector("#feedEmail")

let Abbonamento=document.querySelector("#abbonamento")
let feedAbbonamento=document.querySelector("#feedAbbonamento")
let formRegistrazione=document.querySelector("#formRegistrazione");
let feed = document.querySelector("#feed");


//voglio un controllo solo al blur sui campi nome cognome email
let flagNome=true;
nome.addEventListener("blur",function () {
    if (this.value.length<2) {
        feedNome.innerHTML="stai inserendo un nome non valido";
        flagNome=false;
    }else{
        feedNome.innerHTML="";
        flagNome=true;
    }
});
let flagCognome=true;
cognome.addEventListener("blur",function () {
    if (this.value.length<2) {
        feedCognome.innerHTML="stai inserendo un Cognome non valido"
        flagCognome=false;
    }else{
        feedCognome.innerHTML="";
        flagCognome=true;
    }
});
let flagEmail=true;
email.addEventListener("blur",function () {
    const formatoEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!this.value.match(formatoEmail)) {
        feedEmail.innerHTML="stai inserendo una mail non valida, riprova"
        flagEmail=false;
        
    }else{
        feedEmail.innerHTML="";
        flagEmail=true;
    }
});

Abbonamento.addEventListener("change",function () {
    if (this.value=="premium") {
        feedAbbonamento.innerHTML="<h4> + 100€ sul totale </h4>"
    }else if (this.value=="base") {
        feedAbbonamento.innerHTML="<h4> + 50€ sul totale </h4>"
        
    }else{
        feedAbbonamento.innerHTML="<h4> + 0€ sul totale </h4>"
        
    }
})
function validate(event) {
    //controlla primo if nel caso in cui i campi non siano stati neppure toccati,mai partito il blur
    if (nome.value.trim()==""||cognome.value.trim()==""||email.value.trim()==""||Abbonamento.value==-1) {
        feed.innerHTML=`<h4>ti stai dimenticando qualcosa</h4>`
        event.preventDefault();
        //questo qui controlla i flag
    }else if (!flagNome||!flagCognome||!flagEmail) {
        feed.innerHTML+=`<h4> c'è qualcosa compilato male </h4>`
        event.preventDefault();
    }
}
formRegistrazione.addEventListener("submit",validate);
