//prova a svolgere lo stesso esercizio ma con un unica funzione
let numeri = [34, 12, 1, 9, 17, 9876, 23, 22];
let demo=document.getElementById("demo");
let ciao=document.getElementById(calcolaPari());

let numeroPari=[];


function calcolaPari(){

for(i=0;i<numeri.length;i++){
    var numero=numeri[i];
    if (numero%2==0) {
        numeroPari.push(numero);
        demo.innerHTML='<li>'+numero+'</li>';
    }
}
console.log(numeroPari);
return numero;

}

ciao.innerHTML='<p>'+calcolaPari()+'</p>';
