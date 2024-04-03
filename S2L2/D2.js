/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 2
var num2 = 10

    if (num1 > num2) {
        console.log("num1 è maggiore di num2");
    } else {
        console.log("num1 è < di num2");
    }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
 var num = x
   if (num != 5) {
    console.log("not equal");
   } else {
    console.log(num);
   }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
var numero = x

if (x%5) {
    messaggio = x + "è divisibile per 5";
} else {
    messaggio = x + "non è divisile per 5";
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
var num1 = x
var num2 = y


if (num1 = 8 || num2 = 8) {
    console.log(num1 || num2 + "è uguale a 8");
} else if (num1 + num2 = 8){
    console.log("la somma è uguale a 8");
} else {
    console.log("la loro sottrazion è uguale a 8");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = x

  if (totalShoppingCart > 50) {
      console.log(totalShoppingCart + "spedizione gratuita");
  } else {
      console.log(totalShoppingCart + 10 );
  }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = (totale - sconto)
var sconto = 20%
var totale = y
  if ((totalShoppingCart) > 50) {
      console.log(totalShoppingCart + "spedizione gratuita");
  } else {
      console.log(totalShoppingCart + 10 );
  }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var num1 = 3
var num2 = 6
var num3 = 10

if (num1 > num2) && (num1 < num3) {
  console.log("num3,num1,num2")
} else if ((num2 > num1) && (num1 > num3)) {
  console.log("num2,num2,num3")
} else {
  console.log("num1,num2,num3)
};



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
 var valore = x 

 if (typeof valore = number) {
    console.log("il valore fornito è un numero")
 } else {
    console.log("il valore fornito non è un nuemero")
 };


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var num = x

if (x%2) {
   console.log(x + "è pari");
} else {
   console.log(x + "è dispari");
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 */ 
  let val = 7
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName ;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array [];

let array[1,2,3,4,5,6,7,8,9,10];

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100);
