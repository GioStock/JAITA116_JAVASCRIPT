//Esercizio 7 – Scrivere un programma per trovare il valor più vicino a 100 tra una coppia di numeri forniti, se  sono uguali ritorna un avviso 

let num1 = 99;
let num2 = 88;

if (num1 > num2) {
    console.log('il valore più vicino a 100 è: ' + num1);
} else if (num2 > num1) {
    console.log('il valore più vicino a 100 è: ' + num2);
} else if (num1 == num2) {
    console.log('i numeri sono uguali! Attenzione!');
} 
if (num1||num2>=100) {
    console.log('non funziona se il numero è maggiore o uguale a 100!');
}