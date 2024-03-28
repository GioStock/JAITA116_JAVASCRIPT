//querySelectorAll("CSSsyntax")
//recupera piu elementi contemporaneamente, costruisce una NodeList(parente stretto degli array)
let lisSpesa = document.querySelectorAll("ul#listaSpesa li.txt-blue"); //node list
console.log(lisSpesa);
//leggo il contenuto del primo li
console.log(lisSpesa[0].innerHTML);
console.log(lisSpesa[0].textContent); //textContent prende solo cio che è testo
console.log(lisSpesa[1].innerHTML);
console.log(lisSpesa[2].innerHTML);
lisSpesa[2].textContent = "Pan di Stelle";

//recupero testi di tutti gli li
//[...] operatore "tre punti" rende in un array
[...lisSpesa].forEach((li) => {
  console.log(li.textContent);
});

//voglio mettere in rosso solo i libri applicando la classe txt-red

let libriRosso = document.querySelectorAll("#listaLibri li"); //nodelist
console.log(libriRosso);
for (let i = 0; i < libriRosso.length; i++) {
  libriRosso[i].setAttribute("class", "txt-red");
}
//ATT: e se passo un id al querySelectorAll???
let liVino = document.querySelectorAll("#due"); //crea comunque una nodeList con un elemento all'interno
console.log(liVino);
liVino[0].textContent = "Birrrrrraaaa";
