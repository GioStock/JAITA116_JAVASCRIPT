//attraverso api fetch posso comunicare con delle api esterne, richiedendo o inviando dati presso delle risorse (endpoint=url)
const urlEndPoint="https://dummyjson.com/recipes";
let demo=document.querySelector("#demo")
//quando nella fetch passo solo l'url sto eseguendo una request di tipo GET
//La fetch è una Promise nello specifio una Request. Quindi accetta delle funzioni di callback
fetch(urlEndPoint)
.then(data=>{
    return data.json();//questo metodo json() appicato a data nasconde un parse(), quindi sto trasformando in oggetti comprensibili alla mia tecnologia
})
.then(response=>{
    //response.recipes è un array di 30 oggetti 
    let ricette=response.recipes

    console.log(ricette[0].image);
    
    ricette.forEach(ricette => {
        demo.innerHTML+=`<li>${ricette.name} <img src=${ricette.image}></li>`
    });
})
