//Esercizio 13 - Scrivi un programma che stampa tutti gli interi da 1 a 100. Per i multipli di 3 stampa “Ciao”,  per i multipli di 5 stampa “Mondo”. Per i multipli sia di 3 , sia di 5 stamperà “Ciao, Mondo” 

for (let i = 1; i <=100; i++) {
    
    if (i%3==0 && i%5==0) {
        
        console.log( i +' multiplo di 3 e 5');

    }else if(i%5==0){
        console.log( i +' multiplo di 5');
    }else if(i%3==0){
        console.log( i +' multiplo di 3');
    }else{
        console.log(i);
    }
}




