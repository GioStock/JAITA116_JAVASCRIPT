// Es2 Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console.

let pari=document.getElementById('pari');
let dispari=document.getElementById('dispari');

for (let i = 0; i <= 15; i++) {
    
    if (i%2==0) {
        console.log('pari: '+i);
        
    }
    
    if (i%2==1) {
    console.log('dispari: '+i);    
        
    }
    
}
    