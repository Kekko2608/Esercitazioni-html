
const tableDiv = document.getElementById('tabellone')
const bottone_random = document.getElementById("bottone")


function estrai (){
        const numeroRandom = Math.floor(Math.random() * 76) ;
        const numeroEstratto = document.getElementById("numero" + numeroRandom);
        document.getElementById("random_number").innerHTML = numeroRandom;
        numeroEstratto.classList.add("numberCellSelected");;
}

const generateMainBoard = function () {
for (let i = 0; i < 76; i++) {
    const numberCellDiv = document.createElement('div');
    numberCellDiv.classList.add('numberCell');
    const cellValue = document.createElement('h3')
    cellValue.innerText = i 
    cellValue.id = "numero" + i;
    numberCellDiv.appendChild(cellValue)
    tableDiv.appendChild(numberCellDiv)
}
}

generateMainBoard()
bottone_random.addEventListener("click", estrai)

