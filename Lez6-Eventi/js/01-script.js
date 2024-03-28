function miaFunzione() {
    alert("ciao");
}

let btn=document.querySelector("#btn");
btn.addEventListener("click",miaFunzione);

//utilizzo delle funzioni anonime per poter lanciare una funziona parametrizzata

function calcolaSomma(num1,num2) {
    let somma =num1+num2;
    console.log(somma);
    return somma;
}

let btnSomma=document.querySelector("#btnSomma");
btnSomma.addEventListener("click",function(){
    //adesso posso chiamare calcola somma 
    let num1=Number( document.querySelector("#num1").value);
    let num2=Number( document.querySelector("#num2").value);
    
    let demo=document.querySelector("#demo");
    demo.innerHTML = `<li>${calcolaSomma(num1, num2)}</li>`;
    calcolaSomma(num1,num2);
});
