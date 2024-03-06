//&& and logico(entrambe le condizioni valutare), || or logico (o una o l'altra condizione da valutare), ! not logico()
let punteggio1 = 50;
let skill1 = 15;

//il gioco mi dice: passo il livello se il punteggio è maggiore di 50 e le skill maggiori di 20
//  AND LOGICO                 T            T----> True
let passaggioLivello = (punteggio1 >= 50) && (skill1 >= 20);
console.log(passaggioLivello);

if (punteggio1 >= 50 && skill1 >= 20) {
    console.log('bravo hai passato il livello');
} else {
    console.log('devi migliorare qualcosa');
}

//per poter avanzare di livello mi basta avere anche solo uno sopra la soglia 

let easyMod = (punteggio1 >= 50) || (skill1 >= 20)
console.log(easyMod);

if (punteggio1 >= 50 || skill1 >= 20) {
    console.log('hai superato il livello in EasyMode!!!');
} else {
    console.log('mi spiace anche con la EasyMod ti sei mostrato un nabbo!');
}

//torno al giochino dell'ora
//let oraEsatta= new Date() //                   sono degli esempi per l'ora attuale     
//let oraAttuale = oraEsatta.getHours();         sono degli esempi per l'ora attuale

let oraAttuale = 21;

if (oraAttuale <= 12) {
    console.log('buongiorno sono le ore: ' + oraAttuale);
} else if (oraAttuale > 12 && oraAttuale <= 18) {   
    console.log('buon Pomeriggio, sono le ore: ' + oraAttuale);
} else if (oraAttuale > 18 && oraAttuale <= 21) {
    console.log('Buonasera sono le ore: ' + oraAttuale);
} else if(oraAttuale>21&&oraAttuale<=24){
    console.log('buonanotte sono le ore: '+ oraAttuale);
}else{
    console.log('stai fornendo un ora non valida, controllala attentamente!');
}
