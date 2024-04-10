

let bottone=document.getElementById("bottone");
let testo=document.getElementById("text");


bottone.addEventListener("click", func)
function func (){
let lista = document.createElement("li");        
var x = document.getElementById("text").value; 
let textNode = document.createTextNode(x);                
lista.appendChild(textNode);                                  
let list = document.getElementById("ul");                   
list.appendChild(lista);       
let pulsante = document.createElement("button");
    pulsante.textContent = "Elimina";
    list.appendChild(pulsante)           
}

func()



// una funzione che cambia la classe (aggiunge sbarrato)

let ulist = document.getElementById("ul");

function line (event) {
    event.target.classList.toggle("myclass");
}

let listaElementi = document.querySelectorAll("li");
listaElementi.forEach(function(li) {
    li.addEventListener("click", line);
});





// una funzione che elimina il task
//      agganciarsi nell'html
//      for
//      remove
let botton = document.querySelector("pulsante")

function elimina () {
    list.remove(lista)
}


elimina()




