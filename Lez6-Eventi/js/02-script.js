let mioForm = document.querySelector("#mioForm");

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let email = document.querySelector("#email");
let feed = document.querySelector("#feed");
let demo = document.querySelector("#demo");

//l'evento submit solamente utilizzato per controllare i form. il metodo prevetDefault evita che il form venga laniano senza i dovuti controlli.
mioForm.addEventListener("submit", function (event) {
  if (nome.value == "" || cognome.value == "" || email.value == "") {
    //impedisce che il font venga lanciato
    event.preventDefault();
    event.stopPropagation();
    feed.innerHTML = `stai dimenticando qualcosa`;
  } else {
    console.log(
      "dati inviati: " + nome.value + " " + cognome.value + " " + email.value
    );
  }
});

//Eventi Focus e Blur tipicamente utilizzati sui campi input.
//Focus avviene quando clicco in un campo
//Blur avviene nel momento in cui clicco fuori dal campo dopo averci cliccato dentro, quindi qunado perdo il fuoco sul campo 

nome.addEventListener("focus",function () {
    feed.innerHTML=`il nome deve essere almeno di 3 caratteri`;
})

nome.addEventListener("blur",function () {
    if (nome.value.length<3) {
        feed.innerHTML=`stai inserendo un nome troppo corto`;

    }else{
        feed.innerHTML=``;
    }
})