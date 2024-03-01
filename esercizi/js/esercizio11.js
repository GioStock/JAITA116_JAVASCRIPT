/* Esercizio 11 – Scrivi un programma che accetta due numeri interi e mostra il maggiore tra i due. (Utilizza  window.prompt e .alert)  */
let num1= window.prompt('scrivi un numero: ');
console.log(num1);
let num2= window.prompt('scrivi secondo numero: ');
console.log(num1);
if (num1>num2) {
    alert(num1)
    console.log(num1+' è il maggiore');
}else{
    alert(num2)
    console.log(num2+' è il maggiore');
}