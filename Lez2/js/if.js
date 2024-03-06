if (3 > 2) {
    console.log('3 è maggiore di 2');
    //cio che si trova nel corpo dell'if viene eseguito 
    //se la condizione è false non viene eseguita
}


let oraAttuale = 13;
if (oraAttuale <= 12) {
    console.log('buongiorno sono le ore: ' + oraAttuale);
} else {
    console.log('buonasera sono le ore: ' + oraAttuale);
}




let punteggio = 12; //e maggiore viene eseguita la parte dentro if se minore viene eseguito l'else

if (punteggio >= 18) {
    console.log('bravo hai passato l\'esame con: ' + punteggio);
} else {
    console.log('mi spiace non hai passato l\'esame');
}


//operatore ternario puo sostituire l'if
//                 viene eseguito quando è true                questo invece quando è false
(punteggio >= 18) ? console.log('bravo hai superato l\'esame') : console.log('mi spiace non hai superato l\'esame');



