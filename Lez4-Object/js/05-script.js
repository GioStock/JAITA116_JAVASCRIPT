/* 
    estrazione del lotto:
    - Creare uno script che faccia l'estrazione dei nnumeri vincenti del lotto:
    . estrarre in maniera casuale 6 numeri diversi che siano compresi tra 1 e 90;
    . stampare sulla pagina html i 6 numeri con uno stile personalizzato;
    . 
 */
// Funzione per generare un numero casuale tra min (incluso) e max (escluso)
  function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let numeriVincenti=document.getElementById("numeriVincenti");
  // Funzione per generare 6 numeri casuali unici tra 1 e 90
  function generaNumeriVincenti() {
      let numeriVincenti = [];
      while (numeriVincenti.length < 6) {
          let numero = generaNumeroCasuale(1, 91);
          if (!numeriVincenti.includes(numero)) {
              numeriVincenti.push(numero);
            }
            
        
        }
    return numeriVincenti;
    
  }
  generaNumeriVincenti().forEach(numero => {
    numeriVincenti.innerHTML += `<div class="numeriVincenti">
                                         <p>${numero}</p>
                                    </div>`;
  });
//   numeriVincenti.innerHTML=generaNumeriVincenti().join(' ');
// generaNumeriVincenti();

/* 
    Aggiungere un input (o 5), in cui l'utente inserisce 5 numeri da giocarsi. Una volta inseriti i numeri, questi vengono visualizzati a schermo (gli input si resettano) e avviene l'estrazione. Il programma ti comunica poi se hai azzeccato qualche combinazione e quale, evidenziando i numeri corretti a livello visivo.
    Se non ne hai azzeccati, messaggio di dispiacere.
 */
  
   let demo = document.getElementById("demo");
   let scegli = document.getElementById("scegli");
   let btnGioca = document.getElementById("btnGioca");
   let tuoiNumeri=document.getElementById("numeriTuoi");

   function caricaNumeri() {
    
     let scegliNum=scegli.value;
     if (scegliNum.trim()==""||scegliNum>90||!Number(scegliNum)) {
       
       demo.innerHTML=alert("inserire solo numeri da 1 a 90!");
       scegli.value="";
       demo.innerHTML="";
      }else{
        demo.innerHTML += `<p>${scegliNum}</p>`;
        scegli.value = "";
        let numeriTuoi=[];
        for (let i = 0; i <6 ; i++) {
          numeriTuoi.push(scegliNum);
          
          
        }
        console.log(numeriTuoi);
        
        
          
        }
        

        
      
      return scegli.value="";
        
      }
      
      
      
    
    btnGioca.addEventListener('click',caricaNumeri);
    