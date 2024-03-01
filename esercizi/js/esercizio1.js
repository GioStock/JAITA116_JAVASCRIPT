

let lato1 = 5;
let lato2 = 6;
let lato3 = 7;

let perimetro= lato1+lato2+lato3;
console.log('il perimetro è: '+perimetro);

let perimetroH=document.getElementById('perimetro');

perimetroH.innerHTML= '<p>'+'il perimetro è: '+perimetro+'</p>';

let semiPerimetro = perimetro/2;
console.log('il Semi Perimetro è: '+semiPerimetro);

let area= Math.sqrt(perimetro*(semiPerimetro-lato1)*(semiPerimetro-lato2)*(semiPerimetro-lato3));
console.log('l\'area è:'+area);

let areaH=document.getElementById('area');
areaH.innerHTML='<p>'+'l\'area del triangolo è: '+area.toFixed(2)+'</p>'
