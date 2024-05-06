class User {
   constructor (_firstName, _lastName, _age, _location){
    this.firstName = _firstName
    this._lastName = _lastName
    this.age = _age
    this.location = _location
   }

   compareAge (User1) {
    if (this.age > User1.age ){
        return `${this.firstName} è più vecchio di ${User1.firstName}`
    }else if (this.age < User1.age ) {
        return `${this.firstName} è più giovane di ${User1.firstName}`
    }else {
        `${this.firstName} ha la stessa età di ${User1.firstName}`
    }
   }
}

Marco = new User ('Marco', 'Rossi', 28, 'Milano')
Riccardo = new User ('Riccardo', 'Loi', 15, 'Bologna')
Stefano = new User ('Stefano', 'Casasola', 40, 'Torino')

console.log(Marco.compareAge(Stefano))