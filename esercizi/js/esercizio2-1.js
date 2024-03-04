/* ES1 Scrivi, utilizzando if-statement, un programma per trovare il numero più grande tra 5 numeri. Mostra sulla pagina i 5 numeri scelti in una lista non ordinata e in un paragrafo sottostante indica qual è il numero più grande. */


let lista = document.getElementById('lista');
let max = document.getElementById('max');

let num1 = prompt ('inserisci numero 1:');
let num2 = prompt('inserisci numero 2:');
let num3 = prompt('inserisci numero 3:');
let num4 = prompt('inserisci numero 4:');
let num5 = prompt('inserisci numero 5:');
let numeri=[num1,num2,num3,num4,num5];
let maxMax=0;
console.log(numeri);

lista.innerHTML =  '<ul>'+'numero scelto: ' + num1 + '</ul>';
lista.innerHTML += '<ul>'+'numero scelto: ' + num2 + '</ul>';
lista.innerHTML += '<ul>'+'numero scelto: ' + num3 + '</ul>';
lista.innerHTML += '<ul>'+'numero scelto: ' + num4 + '</ul>';
lista.innerHTML += '<ul>'+'numero scelto: ' + num5 + '</ul>';

for (let numero of numeri) {
    if (numero>maxMax) {
        maxMax=numero;
        
    }
    max.innerHTML='<p>'+'il numero maggiore tra quelli scelti è : '+maxMax+'</p>';
}