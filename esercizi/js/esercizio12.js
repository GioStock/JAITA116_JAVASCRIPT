// Esercizio 12 – Esercizio 8 utilizzando un ciclo for 

let frase= 'pippo baudo';
let fraseNuova='';
for (let i = 0; i < frase.length; i++) {
   
    fraseNuova= frase.split('').reverse('').join('');
    
}
console.log(fraseNuova);