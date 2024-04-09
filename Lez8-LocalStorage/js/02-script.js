function login(event) {
    let nickname=document.querySelector("#nickname").value;
    let ruolo=document.querySelector("#ruolo").value;
    if (nickname!=''&& ruolo!=-1) {
        localStorage.setItem('nickname',nickname);
        localStorage.setItem('ruolo',ruolo);
    }else{
        alert("non hai inserito nessun nickname o il ruolo non è selezionato");
        event.preventDefault();
    }

}
let btnLogin=document.querySelector("#btnLogin");
btnLogin.addEventListener('click',login);

function logout() {
    //il metodo removeItem() cancella solo i valori assegnati alla chiave
    // localStorage.removeItem('nickname');
    // localStorage.removeItem('ruolo');
    // //il metodo clear cancella tutta la localStorage in un colpo solo
    localStorage.clear();
    

}
let btnLogout=document.querySelector("#btnLogout");
addEventListener('click',logout);
let sessioneUser=document.querySelector('#sessioneUser');
//verifica se esiste qualcosa in local o session storage
function salutaUser() {
    let nickname= localStorage.getItem('nickname');
    let ruolo= localStorage.getItem('ruolo');
    if (nickname!=null&&ruolo!=null) {
        sessioneUser.innerHTML = `<div class="alert alert-success" role="alert">
  <strong>Benvenuto/a ${nickname}!!!</strong> Hai selezionato il ruolo di ${ruolo}.
</div>`;
        
        
    }else{
        sessioneUser.innerHTML=`<div class="alert alert-warning" role="alert">
  Nessun utente connesso, effettua il login per partecipare!
</div>`
    }
}
document.addEventListener('DOMContentLoaded',salutaUser);
function verificaStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        
        console.log(localStorage.key(i)+"="+localStorage.getItem(localStorage.key(i)));
        
    }
}
let btnVerifica=document.querySelector('#bntVerifica');
btnVerifica.addEventListener('click',verificaStorage);