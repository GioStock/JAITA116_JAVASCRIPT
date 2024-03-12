let demo=document.getElementById("demo");
let elNome= document.getElementById("nome");

// console.log(nome);

function saluta() {
    let nome=elNome.value;
     
        if (nome.trim()=='') {
            demo.innerHTML="non hai compilato il campo!";
            demo.style="color:red;"
            elNome.value='';
        }else{
            
            demo.innerHTML="Ciao "+ nome + "!";
            demo.style='color: blue';
        }

}
