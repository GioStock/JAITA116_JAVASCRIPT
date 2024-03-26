/* 
    progettare un array di automobili che contiene alcuni oggetti, con le proprietà marca
    modello
    colore
    alimentazione
    anno
    cavalli

    quindi:
    - visualizzare tutti i dati in console 
    - cancellare da tutte le auto la proprietà cavalli
    - Modificare la proprietà anno solo nelle auto di colore: bianco, impostandola a 2024;

*/

class Automobile {
  /** JS DOC SONO COMMENTI SPECIALI
   *
   * @param {*} marca
   * @param {*} modello
   * @param {*} colore
   * @param {*} alimentazione
   * @param {*} anno
   * @param {*} cavalli
   */
  constructor(marca, modello, colore, alimentazione, anno, cavalli) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    this.alimentazione = alimentazione;
    this.anno = anno;
    this.cavalli = cavalli;
  }

  descrivi() {
    let descrizione = `${this.marca} ${this.modello} ${this.colore} ${this.alimentazione} ${this.anno} ${this.cavalli} `;
    return descrizione;
  }
}

let miaAuto= new Automobile("Peugeot","2008","blu","benzina",2019,1300)
class Pilota{
    /**
     * 
     * @param {*} nome 
     * @param {*} cognome 
     * @param {*} eta 
     * @param {Automobile} auto 
     */
    constructor(nome,cognome,eta,auto){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.auto=auto;
    }
    descrivi(){
        let descrizione= `Pilota: ${this.nome} ${this.cognome} ${this.auto.descrivi()}`;
        return descrizione;
    }
}

let mioPilota= new Pilota("Giovanni","Carotenuto",27,miaAuto);



console.log(mioPilota.descrivi());

let autosalone=[
    new Automobile("moto","kawasaki","black","benzina",2013,750),
    new Automobile("fiat","panda","rossa","diesel",1996,750),
    new Automobile("tesla","s","blue","benzina",2013,1600),
    new Automobile("bmw","Q5","cielo","benzina",2024,2000)
]
let listaVeicoli=document.getElementById("");
function stampaVeicoli() {
    autosalone.forEach(auto=>{
listaVeicoli.innerHTML+=`<li>${auto.descrivi}</li>``
    })
}