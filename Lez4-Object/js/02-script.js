//NOTAZIONE CON FUNZIONE COTRUTTORE
function Studente(nome, cognome, matricola, email) {
  //creo una proprieta nome alla quale associo = il valore del parametro che passo sopra
  this.nome = nome;
  this.cognome = cognome;
  this.matricola = matricola;
  this.email = email;

  this.presentati= function () {
    let presentazione = "ciao, sono: "+ this.nome + " "+ this.cognome+ " "+ this.email;
    return presentazione;
  }
}
let studente1 = new Studente("Andrea","Trapani",1,"andrea.tra@gmail.com");
let studente2 = new Studente("Giovanni","Carotenuto",2,"gio@gmail.com");

console.log(studente1.nome +" "+studente1.cognome);
console.log(studente2);
//con aula sto costruendo un array di oggetti di tipo studente.
let aula=[

    new Studente("Andrea","Trapani",1,"andrea.tra@gmail.com"),
    new Studente("Claudia","Pelli",2,"gio@gmail.com"),
    new Studente("Giovanni","Carotenuto",3,"gio@mail.com"),
    new Studente("Simone","Ferraro",4,"simone@mail.com"),
    new Studente("Valeria","Zaru", 5 , "valeria@gmail.com"),
    new Studente("Melania","Zaru", 6 , "Melania@gmail.com"),
    new Studente("Mirko","di frano", 7 , "Mirko@gmail.com")

];

for (let i = 0; i < aula.length; i++) {
    console.log(aula[i].nome+" "+aula[i].cognome);
    
}

//FOREACH DA UTILIZZARE QUANDO SIAMO IN PRESENZA DI ARRAY
//per ogni stud dell'aula parte una funzione anonima che fa qualcosa
//stud è un parametro della funzione 
aula.forEach(stud => {
    // console.log(stud.nome+" "+stud.cognome);
    console.log(stud.presentati());
});

let colori = ["Giallo","Rosso","Verde","Blu"];
colori.forEach(colore => {
    console.log(colore);
});