let frutta=['mela','pesca','ciliegia','kiwi','banana'];
//stampare una lista di frutta all'interno de mio ul
//1. Recupero il pezzo di html che mi interessa
//  nome variabile                           ID nell'HTML
let listaFrutta = document.getElementById('listaFrutta');   //ul di HTML

// //2. Scrivo nell'ul cioè listaFrutta
// listaFrutta.innerHTML =  '<li>'+ frutta[0]+'</li>';
// listaFrutta.innerHTML += '<li>'+ frutta[1]+'</li>';
// listaFrutta.innerHTML += '<li>'+ frutta[2]+'</li>';
// listaFrutta.innerHTML += '<li>'+ frutta[3]+'</li>';

frutta.push('arancia');
frutta.push('albicocca');

for(let i=0; i<frutta.length;i++){
    listaFrutta.innerHTML+= '<li>'+frutta[i]+'</li>'; 
    //innerHTML è una proprieta che rimanda all'HTML  e lo reindirizza come in questo caso in una lista punteggiata
}

