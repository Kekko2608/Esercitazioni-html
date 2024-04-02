
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Javascript prevede 5 tipi di dati PRIMITIVI e un tipo di dato COMPLESSO. I primitivi sono numeri, stringhe ossia parole, booleani che si dividono in true e false,
null e undefinied. Null e undefinied prevedono un solo valore possibile, e differiscono per il fatto che undifinied rappresenta un valore che non esiste, mentre null
è diverso anche da 0 o da una stringa vuota.
il valore complesso invece è rappresentato dagli oggetti,ad esempio le funzioni. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 var myName = "francesco"; 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var myVar = 12 + 20 ;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 var x = 12 ; 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
const myName = "francesco";
myName = "pisu";
console.log(myName);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = 12 ;
y = x - 4 ;


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


   var name1 = "john";
   var name2 = "John";

  console.log(name1==name2);  // darà false
  console.log(name1!=name2);  // darà vero
  console.log(name1==name2.toLowerCase());
  

 



 




