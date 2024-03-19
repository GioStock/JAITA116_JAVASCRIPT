//costruisci un oggetto con notazione letterale che descriva un'automobile
//Assegna una serie di proprieta che ritieni opportune e una "status: true false". costruisci un metodo per spegnere e accendere l'auto modificando il valore della prop status. costruisci anche un metodo descrivi()

//costruisci una funzione costruttore per descrivere il corso che stai seguendo.
//tra le varie proprieta deve essere presente la proprietà: "studenti: string[]"
//dovranno essere presenti i seguenti metodi: 
//- stampaListaStudenti() e aggiungiStudente(nomeStudente)

let automobile={
    marca: "Jeep",
    modello: "Renegade",
    anno: 2021,
    cilindrata: '1600cc',
    targa:'AA666BB',
    status:false,
    descrivi:function(){

        let descrizione= this.marca+" "+this.modello+" anno "+this.anno+" ha una cilindrata di "+this.cilindrata+" con targa: "+this.targa+", Status: "+this.status;
        return descrizione;
    },
    accendiSpegni(){
        this.status=!this.status;
        if (this.status) {
            return"L'auto è accesa. Status: " + this.status;
        }else{
            return"L'auto è spenta. Status: " + this.status;
        }
    }
}

console.log(automobile.descrivi());
console.log(automobile.accendiSpegni());
console.log(automobile.descrivi());
console.log(automobile.accendiSpegni());

let auto=[automobile];
console.log(auto);



//costruisci una funzione costruttore per descrivere il corso che stai seguendo.
//tra le varie proprieta deve essere presente la proprietà: "studenti: string[]"
//dovranno essere presenti i seguenti metodi: 
//- stampaListaStudenti() e aggiungiStudente(nomeStudente)

function Corso(classe,ore,studenti,prof) {
    this.classe= classe;
    this.ore= ore;
    this.studenti=studenti;
    this.prof=prof;

    presentati=function () {
    let presentazione= this.classe+" "+this.ore+" durata"+" composta da : "+this.studenti+" ed i docenti sono: "+this.prof;
        return presentazione;
    }
    
}

let studentiPartecipanti= ["Mario","Franco","Gianni","Sereno"];
let professori= ["Pippo","Pluto","Paperino"];

let presentazioneCorso = new Corso("Jaita116"," 3 mesi",studentiPartecipanti,professori);
console.log(presentazioneCorso);