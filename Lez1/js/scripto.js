let nome='Giovanni';
let cognome='Carotenuto';
let eta= 27;
let citta='Castel Frentano';
let paese='Italia';

let presentanzione = 'ciao sono:'+ nome + ' ' + cognome +' ho'+ eta +' anni ' + 'abito a '+ citta +' che si trova in ' + paese;
console.log(nome);
console.log(cognome);
console.log(eta + ' anni');
console.log(citta);
console.log(paese);

console.log(presentanzione);

document.write('<h1> nome: '+ nome+' '+cognome+'</h1>');
document.write('<h2> Età e Città di Provenienza: '+ eta+' anni '+citta+ ', '+paese +'</h2>');
document.write('<h2> Età: '+ eta+' anni '+'</h2>');
document.write('<h2> Città di Provenienza: '+  citta + ', '+paese +'</h2>');