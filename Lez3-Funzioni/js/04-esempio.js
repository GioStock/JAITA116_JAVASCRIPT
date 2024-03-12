let numeri = [34, 12, 1, 9, 17, 9876, 23, 22];

function calcolaPari(numero) {
    if (numero % 2 == 0) {
        return numero;
    } else {
        return null;
    }
}

//la funzione eseguiCalcolo verrà richiamata dal pulsante

let listaPari = [];
function eseguiCalcolo() {
    for (let i = 0; i < numeri.length; i++) {
        let numeroPari = calcolaPari(numeri[i]);
        if (numeroPari != null) {
            listaPari.push(numeroPari);
        }

    }
    console.log(listaPari);
    stampaListaPari(listaPari);
}

let elNumPari = document.getElementById("elNumPari");
//lista numeri sarà un array
function stampaListaPari(listaNumeri) {
    for (let i = 0; i < listaNumeri.length; i++) {
        elNumPari.innerHTML += '<li>' + listaNumeri[i] + '</li>'
    }
}

//stampo tutti i numeri nel demo
let demo = document.getElementById("demo");
for (let i = 0; i < numeri.length; i++) {
    demo.innerHTML += '<li>' + numeri[i] + '</li>';
}

//prova a svolgere lo stesso esercizio ma con un unica funzione