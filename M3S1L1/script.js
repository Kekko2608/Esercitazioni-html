"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(n) {
        this.credito += n;
    }
    chiamata(minutiChiamata) {
        let costo = this.costoMinuto = minutiChiamata;
        this.credito -= costo;
    }
}
const user1 = new User('Mario', 'Rossi');
user1.ricarica(10);
user1.chiamata(5);
console.log('Credito dopo la ricarica' + user1.credito);
