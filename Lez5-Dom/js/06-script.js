let listaFilm=document.querySelector("#listaFilm")
let nuovoLi = document.createElement("li");//creerà un li

//createTextNode() crea un nodo testuale da agganciare a un parent 
let nuovoTitoloFilm=document.createTextNode("The Game");

//appendChild aggancia al genitore un figlio
nuovoLi.appendChild(nuovoTitoloFilm);//<li>The Game </li>
listaFilm.appendChild(nuovoLi);

let nuovoLi2=document.createElement("li");
nuovoLi2.textContent="Dumbo";
listaFilm.prepend(nuovoLi2);//lo imposta su un nuovo li 