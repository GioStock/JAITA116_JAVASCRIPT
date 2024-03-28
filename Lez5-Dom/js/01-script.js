// let demo=document.getElementById("demo");


//querySelector('CSSsyntax')
//(#se è un id), (se è una classe usare il .) , (p--->elemento html)

//querySelector restituisce un unico elemento alla prima occorrenza, qualunque sia la sintassi


let demo=document.querySelector("#demo");     //     <---------
// let demo=document.querySelector("div#demo");    //<---------

demo.innerHTML = "questo è il contenuto nuovo di demo";
let li= document.querySelector("li");

let li3=document.querySelector("#tre");//specifica l'id
li3.innerHTML="biscotti";
let li2=document.querySelector("#listaSpesa li#due.txt-blue");//piu specifico
li2.innerHTML="ciambelle";
let li1=document.querySelector(".txt-blue");//prende il primo
li1.innerHTML="droga";
//voglio sapere cosa ce scritto nel secondo li
let secondoLi=document.querySelector("li#due")
console.log(secondoLi.innerHTML);



