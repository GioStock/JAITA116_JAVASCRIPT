//questo oggetto js va bene solo per la mia tecnologia, non è pronto per essere trasferito all'esterno
let persona={
    nome: "dario",
    cognome: "Mennillo",
    corsi:4,
    presenza:true
}

//per poter trasferirlo presso una risorsa (endpoint di un server= url)devo trasformarlo in JSON
//I JSON sono delle stringhe

//esistono dei metodi che permettono di trasformare un oggetto in stringa e viceversa

//1. object.stringfy() trasforma un oggetto js in un oggetto JSON

//l'oggetto JS puo essere definito con qualsiasi notazione:letterale,con costruttore, con classe
let studente={
    nome:"Pippo",
    cognome:"Rossi",
    corso:"jaita116",
    presenza:true
};
//adesso posso utilizzare studente JSON come dato da inviare presso un API
let studenteJSON=JSON.stringify(studente);
console.log(studenteJSON);
console.log(typeof studenteJSON);

//2. object.parse() trasforma un oggetto formato JSON in un oggetto JS
//Ormai tutte le API rispondono con oggetti formato JSON, quindi nel chiamare un API riceveremo stringhe

let docenteJSON='{"nome": "Milo","cognome":"Spandre","materia":"JS"}'
let docente=JSON.parse(docenteJSON);//questo docente è un oggetto JS
console.log(docente.nome);
console.log(docente);

