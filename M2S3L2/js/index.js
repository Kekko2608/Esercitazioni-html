
const text = document.getElementById('content')

const save = function () {
    const textContent = text.value

    localStorage.setItem('persona', textContent)
}

const deleteMemory = function () {
    localStorage.removeItem('persona')
    text.value = ''
  }

window.onload = function () {
    const savedText = localStorage.getItem('persona')
    if (savedText) {
        text.value = savedText;
    }
}



// contatore
var contatore = sessionStorage.getItem('contatore') || 0;
        
// Funzione per aggiornare il contatore e mostrare il tempo trascorso
 function aggiornaContatore() {
    contatore++; // Incrementa il contatore
    document.getElementById("contatore").innerHTML = contatore + " secondi"; // Mostra il tempo trascorso
    sessionStorage.setItem('contatore', contatore); // Salva il valore del contatore nella sessionStorage
}
        
// Avvia il contatore
var intervallo = setInterval(aggiornaContatore, 1000); 


