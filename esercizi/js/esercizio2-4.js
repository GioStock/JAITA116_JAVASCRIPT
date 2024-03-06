/* Es4 Scrivi un programma che somma i multipli di 3 e multipli di 5 sotto il numero 1000. ris: 233168 */

for (let i = 0; i < 1000; i++) {
    if (i%3==0) {
        i=i*3;

        
    }
    console.log('multiplo di 3:'+i);
    if (i%5==0) {
        i=i*5;
        
    }
    console.log('multiplo di 5: '+i);
}