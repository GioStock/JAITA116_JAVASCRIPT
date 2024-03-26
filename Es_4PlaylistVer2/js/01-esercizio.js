class Utente {
  constructor(nome, cognome, generePreferito) {
    this.nome = nome;
    this.cognome = cognome;
    this.generePreferito = generePreferito;
    this.playlist = [];
    this.dataCreazionePlaylist=new Date;
  }

  aggiungiCanzone(titolo, album, artista, youtubeLink) {
    this.playlist.push({ titolo, album, artista, youtubeLink });
  }

  stampaPlaylist() {
        let playlistHTML = `<h3>Playlist di ${this.nome} ${this.cognome}:</h3>`;
        playlistHTML += `<p>Creata il: ${this.dataCreazionePlaylist.toLocaleString()}</p>`; // Visualizziamo l'orario di creazione
        playlistHTML += '<ul>';
        this.playlist.forEach(canzone => {
            playlistHTML += `<li>${canzone.titolo} (${canzone.artista})`;
            if (canzone.youtubeLink) {
                playlistHTML += ` <a href="${canzone.youtubeLink}" target="_blank">(play)</a>`;
            }
            playlistHTML += `</li>`;
        });
        playlistHTML += '</ul>';
        return playlistHTML;
    }
}

let utenti = [];

document.getElementById("btnGenera").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let generePreferito = document.getElementById("generePreferito").value;

  let utente = new Utente(nome, cognome, generePreferito);
  utenti.push(utente);

  let titolo = document.getElementById("titolo").value;
  let album = document.getElementById("album").value;
  let artista = document.getElementById("artista").value;
  let youtubeLink = document.getElementById("youtubeLink").value;

  utente.aggiungiCanzone(titolo, album, artista, youtubeLink);

  document.getElementById("titolo").value = "";
  document.getElementById("album").value = "";
  document.getElementById("artista").value = "";
  document.getElementById("youtubeLink").value = "";

  stampaTuttePlaylist();
});

function stampaTuttePlaylist() {
  let playlistContainer = document.getElementById("playlistContainer");
  playlistContainer.innerHTML = "";
  utenti.forEach((utente) => {
    playlistContainer.innerHTML += utente.stampaPlaylist();
  });
}
