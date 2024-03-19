function Canzone(titolo,artista,durata,genere){
    this.titolo=titolo;
    this.artista=artista;
    this.durata=durata;
    this.genere=genere;

    this.info=function(){// template literals ----> ${interno js}
        let info= `Titolo: ${this.titolo}. Artista: ${this.artista}. Durata: ${this.durata}. Genere: ${this.genere}`;
        return info;
    }
    this.riproduci=function() {
        let riproduzione= `Stai Ascoltando ${this.titolo}. la canzone dura: ${this.durata}`;
        return riproduzione;

    }

}

let miaPlaylist=[
    new Canzone("Souk eye","Gorillaz","2:34","Rock"),
    new Canzone("Maremoto","Iside","3:40","Indie"),
    new Canzone("Chandelier","Sia","3:40","Pop"),
    new Canzone("Jessica","Allman Brothers","12:00","Southern Rock")
];

let elPlaylist=document.getElementById("playlist");
console.log(miaPlaylist[0].info());

function stampaCanzoni() {
    miaPlaylist.forEach(canzone => {
        
            elPlaylist.innerHTML += `<div class="box-canzone">
                                        <p>Titolo: ${canzone.titolo}</p>
                                        <p>Artista: ${canzone.artista}</p>
                                        <p>Durata: ${canzone.durata}</p>
                                        <p>Genere: ${canzone.genere}</p>
            
                                    </div>`;
            
        
    })
}
stampaCanzoni();
