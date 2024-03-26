let dataOdierna= new Date(); // data

console.log(dataOdierna);

let giorno=dataOdierna.getUTCDay();
let mese=dataOdierna.getUTCMonth();
let anno=dataOdierna.getUTCFullYear();
console.log(giorno, mese, anno);


console.log(moment().format("DD MMMM  YYYY, h:mm:ss a"));
console.log(moment().subtract(10, 'days').calendar());
console.log(moment().calendar());
console.log(moment().format('DD/MM/YY'));
