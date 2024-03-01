// per assegnare una stringa come valore di una variabile, bisogna metterla tra virgolette o apici
let stringa="sono una stringa";
console.log(stringa);

// se la stringa deve contenere a sua volta degli apici(o apostrofi), bisogna far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.
// un modo è quello di usare il backslash (ovvero \) che è un carattere di 'Escape', prima di ogni apertura e chiusura di apici.
let url='<a href=\ https://www.youtube.com/ target=_blank\> vai a Youtube </a>'
let nomeLibro = 'L\'uomo del boh';
console.log(url, nomeLibro);
document.write('questo è un video', url, nomeLibro);
/* ALTRI UTILIZZI DEL CARATTERE DI ESCAPE 
    APOSTROFO O APICE SINGOLO \' \"APICI DOPPI
    \\ BACKSLASH
    \r per mandare a capo
*/
// un alternativa è quella di utilizzare gli apici singoli per dichiarare la stringa e usare gli apici doppi dove servono all'interno della stringa o viceversa.
let quote='ieri mi ha detto solo "ciao!"';
console.log(quote);


// per concatenare stringhe tra loro possiamo usare l'operatore di concatenazione "+";
let ourString='io vengo prima'+', io vengo dopo';
console.log(ourString);
// come per i numeri possiamo usare loperatore += per concatenare stringhe
let stringConc='io vengo prima. ';
stringConc+='Io vengo dopo.'
console.log(stringConc);
// si possono anche concatenare delle variabili alle stringhe 
let myName= 'Eminem';
let meetMe='ciao mi chiamo '+myName+' . Tu come ti chiami?';
console.log(meetMe);
// si possono quindi ottenere delle stringhe concatenando solo le variabili che contengono stringhe
let aggettivo='Fantastico';
let intro='Javascript è ';
console.log(intro+=aggettivo); //se vogliamo farle diventare un unica stringa si mette il +=


//è possibile calcolare la lunghezza di una stringa utilizzando il metodo .lenght

let firstNameLength = 0;
let firstName = 'Giovanni';

firstNameLength = firstName.length;
console.log(firstNameLength);
console.log(typeof firstNameLength);

//se invece volessimo trovare la prima lettera di una stringa possiamo utilizzare quella che si chiama la "bracket notation";

let firstLetterOfFirstName = firstName[0];//si inizia a contare da zero e non da uno.
console.log(firstLetterOfFirstName);
//è possibile ricavare l'ultimo carattere di una stringa anche se non se ne conosce la lunghezza esatta.
let nome ='Giovannino';
let lastLetterOfName= nome[nome.length- 1];//-1 perche si parte a contare da zero
console.log(lastLetterOfName);




let txt='oggi ho svolto 8 ore di lezione';

//Metodi di Ricerca

let search1 = txt.indexOf('lezione');//restituisce l'indice in cui la parola inizia;
console.log(search1);

let search2 = txt.lastIndexOf('e');// restituisce l'indice dell'ultima occorrenza
console.log(search2);
let search3 = txt.charAt(3);//restituisce il carattere in quella posizione
console.log(search3);
let search4 = txt.indexOf('f');//se il carattere non esiste restituisce -1
console.log(search4);

//Metodi per il taglio
let testo = 'sono le 17 è tutto va bene';
//metodi slice e substring(estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale)
let taglio1 = testo.slice(4,10);//contiene le 5 con gli spazi ' le 17'
console.log(taglio1);

let taglio2=testo.substring(10,4);// fanno la stessa cosa ma qui ti sa riconoscere dal numero piu piccolo a quello piu grande
console.log(taglio2);

let affermazione='il miglior browser del mondo è internet explorer';
//il metodo replace() restituisce una nuova stringa rimpiazzando tutte le ricorrenze del pattern dato con una sostituzione 

let sost=affermazione.replace('internet explorer', 'google chrome');
console.log(sost);

//il metodo toUpperCase () converte tutti i caratteri in maiuscolo

let upp =sost.toUpperCase();
console.log(upp);

//il metodo toLowerCase () converte tutti i caratteri in minuscolo.

let low=sost.toLowerCase();
console.log(sost);



//il metodo split() divide una stringa in una lista ordinata di sottostringhe, le raggruppa in un Array e restituisce questo Array. La divisione avviene cercando un Pattern fornito come paramentro tra le parentesi tonde del metodo e indica dove il metodo deve andare a separare.

//fornendo come pattern una stringa vuota, il metodo separa ogni singolo carattere, spazi compresi.

let string1='ciao mi chiamo Giovanni!'
let arr1= string1.split('');
console.log(arr1);

//fornendo come pattern uno spazio, il metodo andra a separare ogni volta che trova uno spazio.
let string2= 'ciao come stai';
let arr2=string2.split(' ');
console.log(arr2);
//se si parte invece da un array di stringhe, con il metodo join() è possibile ottenere una stringa unica che concatena tutti gli elementi dell'array, separati da virgole, oppure dal carattere specificato come parametro del metodo.

let arr3= ['G','I','O'];
console.log(arr3);

//join('') ha come parametro una stringa vuota, quindi restituirà una stringa che concatena gli elementi dell'array senza alcun tipo di separazione.

let string3=arr3.join('');
console.log(string3);

/* ---eserzio 1--- */

//data una stringa, stamparla in  console al contrario
//punti in più se risolta in 2 righe max compreso il console.log


let strEs = 'i topi non avevano nipoti';
let strInvertito = strEs.split('').reverse().join('');
console.log(strInvertito);


// es 3 Elabora uno script per fare la seguente manipolazione:
//      oggi sono a lezione -> Oggi Sono A Lezione
//      Uppercase della prima lettera di ogni singola parola

let lezione= 'oggi sono a lezione';
let upper=lezione.split(' ').map(upper=>upper.charAt(0).toUpperCase()+upper.slice(1));
let testoUpper=upper.join(' ');
console.log(testoUpper);

//esercizio spiegato dal prof 3

let frase='oggi sono a lezione';

let fraseArray=frase.split(' ');
let nuovaFrase ='';

for(let i=0; i<fraseArray.length; i++){
    let inizialeMaiusc = fraseArray[i][0].toUpperCase();
    let restoParola = fraseArray[i].substring(1);
    nuovaFrase += inizialeMaiusc+restoParola+' ';
}
console.log(nuovaFrase);



// es 2 Elabora uno script per estrarre l'estensione di un file
// "immagineBG.jpg" -> "L'estensione del file è: jpg"

let image = 'immagineBG.jpg';//stringa
let extension = image.slice(image.lastIndexOf('.')+0);//stringa extension viene 
console.log('L\'estensione del file è:',extension);

let images = 'immagineBG.jpg';                           //esercizio 2 spiegato dal prof
let estensione = images.split('.').pop();               
console.log('L\'estensione del file è:.',estensione);



