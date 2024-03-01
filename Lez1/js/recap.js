//duplice natura del singolo +

let numero1 = 5;//number
let numero2 = '3';//string

let somma= numero1+numero2;// string poiche js interpreta prima come string poi come numeri
console.log(somma);

let quoz= numero1/numero2;//differenza riconosce
console.log(quoz);

let prodotto= numero1*numero2; 
console.log(prodotto);//esempio il * riconosce il numero

let sommaVera=numero1 + Number(numero2);//cast del dato numero2
console.log(sommaVera);

//let eta = Number(prompt('quanti anni hai?'));//impostiamo number(castare(forzare)) per far si che deve essere un numero
// let eta10Anni = Number(eta +10);

// console.log('tra 10 anni avrai: '+ eta10Anni);

/* -------------------------------------------------------------------------- */
/*                                    array                                   */
/* -------------------------------------------------------------------------- */

let frutta = ['pera','mela','arancia'];
console.log(frutta[frutta.length -1]);

//voglio stampare in console l'array di frutta
console.log(frutta[0]);
console.log(frutta[1]);
console.log(frutta[2]);
console.log(frutta[3]);

for (let i = 0; i < frutta.length; i++) {
    console.log(frutta[i]);

}
//posso stampare in console tutto l'array ma non su java
console.log(frutta);

//Posso anche stampare nella pagina l'array

document.write('<p>'+frutta+'</p>');

for(let i=0; i<frutta.length; i++){
    document.write('<p>'+frutta[i]+'</p>')
}


