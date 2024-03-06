let demo=document.getElementById("demo");

function salutaUtente() {
    let nomeUtente=prompt("come ti chiami?");

    demo.innerHTML='<h2> Ciao, '+nomeUtente+'</h2>';

}
