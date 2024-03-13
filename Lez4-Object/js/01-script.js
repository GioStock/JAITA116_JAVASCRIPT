let nome = "Dario";
let cognome = "Mennillo";
let eta = 34;
//non posso descrivere un'entita complessa come una persona utilizzando variabili sconnesse tra di loro o addirittura un array
// let docenteJs=["Salvatore","Gennaro",34]

//Gli Oggetti servono a descrivere delle entità complesse, ovvero formate da proprietà diverse tra loro, cioe con tipi diversi.

// notazione letterale, permette di creare un ogetto al "volo"
let docenteJs = {
  //chiave:valore
  //proprietà dell'ogetto:
  nome: "Dario",
  cognome: "Mennillo",
  eta: 34,
  presenza: true,

  //metodo dell'oggetto:
  salutaStudenti: function () {
    let saluto = "ciao studenti.";
    return saluto;
  },
  presentati: function () {
    //this fa riferimento all'oggetto "contenitore" più vicino
    let presentazione =
      this.nome + " " + this.cognome + " " + this.eta + " anni";
    return presentazione;
  },
};
//Come accedere alle proprietà dell'oggetto, leggere il valore delle singole proprieta
console.log(docenteJs);
console.log(docenteJs.nome + " " + docenteJs.cognome);
console.log(docenteJs.eta);
console.log(docenteJs["presenza"]);
console.log(docenteJs.salutaStudenti());
console.log(docenteJs.presentati());
//questi sotto sono degli oggetti builtIn di cui noi utilizziamo proprieta e metodi;
/* 
console.log();
document.getElementById();
elDemo.innerHtml = ""; 
*/

let demo = document.getElementById("demo"); //demo è un HTMLObject
let btn = document.getElementById("btn"); //btn è un HTMLObject

function presentaDocente() {
  demo.innerHTML = "<p>" + docenteJs.presentati() + "</p>";
}
btn.addEventListener("click", presentaDocente);

