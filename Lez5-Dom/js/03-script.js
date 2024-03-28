//recupero lista libri ogni singolo libro

let listaLibri=document.querySelector('#listaLibri');
let libri=listaLibri.children;//HTMLClollection un insieme di elementi e quindi oggetti HTML)---->NO ARRAY
console.log(libri);
[...libri].forEach(libro=>{
    console.log(libro);//scrivo gli oggetti li
    console.log(libro.textContent);
})
//firstElementChild
let primo=listaLibri.firstElementChild.textContent;
console.log(primo);
//lastelementChild
let ultimoLibro=listaLibri.lastElementChild.textContent;
console.log(ultimoLibro);
