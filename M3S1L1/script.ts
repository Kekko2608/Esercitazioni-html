interface smartphone {
    credito:number
    numeroChiamate:number
} 

class User implements smartphone {
    credito: number = 0              
    numeroChiamate: number = 0
    nome:string
    cognome:string 
    costoMinuto:number = 0.2


    constructor (_nome:string, _cognome:string) {
        this.nome = _nome
        this.cognome = _cognome
    }


    ricarica(n:number) {
        this.credito += n
    }
    chiamata(minutiChiamata:number){
        let costo = this.costoMinuto = minutiChiamata
        this.credito -=costo
    }
}

const user1 = new User('Mario', 'Rossi')

user1.ricarica(10)
user1.chiamata(5);

console.log('Credito dopo la ricarica' + user1.credito);

