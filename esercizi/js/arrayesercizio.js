/* -------------------------------------------------------------------------- */
/*                                  esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 

    lista della spesa:
    - creare 2 array.
    - il primo contiene la lista dei prodotti da comprare.
    - il secondo i prezzi dei prodotti.
    - stampare in console il secondo elemento dell'array e del suo prezzo.
    - popolare la lista della spesa che ha id lista con un list element per ogni prodotto che contenga il nome del prodotto e il suo costo.
    - calcolare il totale dei prezzi dei prodotti e scriverlo nel paragrafo con id totale
    - costruire un elemento HTML p nel quale verra stampato il totale senza IVA(22)
    - costruire un elemento HTMl p nel quale verrà stampato il subtotale, cioè il totale dell'iva
    - (per ultimo) all'avvio della pagina comparirà un popup nel quale verrà chiesto il nome dell'utente questo nome verrà stampato nel tag h1 riportando il seguente testo :'Scontrino di nomeUtente'.

    (MINIMO 8 PRODOTTI)
*/


let prodotti =['pasta','pane','pizza','arancia','mela','farina','gelato','acqua']; //array prodotti
let prezzi = [1.89, 2.43, 3.45, 2.32, 3.43, 1.23, 4.09, 1.80]; //array prezzi

console.log(prodotti[1], prezzi[1]);

let listaProdotti = document.getElementById('listaProdotti'); //ul di html array
let prezzo = document.getElementById('prezzo');
let subtotale= document.getElementById('subtotale');
let totale= document.getElementById('totale');


for(let i = 0; i < prodotti.length; i++){
    listaProdotti.innerHTML += '<li>'+prodotti[i]+ ' '+ prezzi[i]+ '€'+  '</li>';
    
}

let somma=0;
for(let i=0;i<prezzi.length;i++){
    somma+=prezzi[i];
    
}
console.log(somma);
prezzo.innerHTML+= '<p>'+'Totale senza Iva: '+somma+'</p>';

let iva= 0.22; //iva
let soloIva = (somma*iva).toFixed(2); //toFixed sta ad indicare i numeri dopo la virgola in questo caso esempio (2);
console.log(soloIva);

subtotale.innerHTML+= '<p>'+'L\'Iva applicata è di: '+soloIva+'</p>';

totale= soloIva+somma;
console.log(totale);
totale.innerHTML+= '<p>'+'Totale: '+ totale +'</p>';


