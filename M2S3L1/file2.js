
let nomeCane = document.getElementById('name_animal')
let nomeProprietario = document.getElementById('name_owner')
let specie = document.getElementById('species')
let razza = document.getElementById('breed')
const formTag = document.getElementsByTagName('form')[0]

let pets = []

class Pet {
    constructor (_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    samePadron (pet1){
        if (this.ownerName === pet1.ownername){
            return 'true'
        } else {
            return 'false'
        }
    }
}

const addPet = function () {
    let petsRows = document.getElementById('pets-row')
    petsRows.innerHTML=''
    pets.forEach((pet) => {
        const newDiv = document.createElement('div') 
        newDiv.classList.add('col')
        newDiv.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${pet.petName}</h5>
                    <h5 class="card-title">${pet.ownerName}</h5>
                    <h5 class="card-title">${pet.species}</h5>
                    <h5 class="card-title">${pet.breed}</h5>
                </div>
        `
        petsRows.appendChild(newDiv)
      })
}

formTag.addEventListener('submit', function (e) {
    e.preventDefault() // NON aggiornare la pagina e perdere i dati
   
    const petFromFormValues = new Pet(
      nomeCane.value,
      nomeProprietario.value,
      specie.value,
     razza.value
    )
    pets.push(petFromFormValues)
  
    nomeCane.value = ''
    nomeProprietario.value = ''
      specie.value = ''
      razza.value = ''
      
      addPet()
  })