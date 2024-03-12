/* 
- Crea uno script che permetta all'utente di postare un tweet tramite una text area.
- una volta scritto il tweet e inviato stampalo, sotto <hr> e resetta la text-area
- al click del bottone cambia colore, il testo del tweet cambia colore.
- Controlla che il Tweet non sia vuoto o composto da soli spazi.
facoltativo:
    - Impostare un numero massimo di caratteri per il Tweet
    - collegare un file css e rendere guardabile la pagina
*/
let btnTweeet = document.getElementById("btnTweet");
let btnColore = document.getElementById("btnColore");
let areaTesto = document.getElementById("area");
let demo = document.getElementById("demo");

function inviaTweet() {
  let area = areaTesto.value;

  if (area.trim() == "") {
    demo.innerHTML = "non hai compilato il campo!";
    demo.style = "color:red;";
    areaTesto.value = "";
  } else {
    demo.innerHTML = "il tuo Tweet: " + area;
  }
}
btnTweeet.addEventListener("click", inviaTweet);

function cambiaColor() {
  inviaTweet();
  demo.style = "color: orange;";
}

btnColore.addEventListener("click", cambiaColor);

//ATTENZIONE le funzioni degli eventListner non hanno le parentesi tonde, MAI!!!!
//oggettoHTML.addEventListner("evento",funzione)
