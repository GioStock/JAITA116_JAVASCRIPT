let i = 0;


let msg = "";

while (i < 10) {
    msg = "ciao siamo sotto il valore 10 e adesso vale: " + i;
    console.log(msg);

    i++
}
 /* -------------------------------------------------------------------------- */
 /*                                    while                                   */
 /* -------------------------------------------------------------------------- */
let colori = ['bianco', 'verde', 'blu', 'bianco', 'verde', 'blu']

let y = 0;

while (y < colori.length) {
    console.log(colori[y]);
    y++;
}
/* -------------------------------------------------------------------------- */
/*                                  do while                                  */
/* -------------------------------------------------------------------------- */
let f=0;
let riga="";
do{
    riga= f+" x 6= "+(f*6);
    console.log(riga);
    f++;
   }   while (f<=10);

