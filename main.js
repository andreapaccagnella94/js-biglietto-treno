console.log("Hi");


/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

Buon divertimento e confermate lettura come al solito :babyyoda:



// tools:
- const/let
- prompt
- arrotondamento

    let num = 12.345;

    // Arrotonda all'intero più vicino
    let rounded = Math.round(num); // risultato: 12
    console.log(rounded);

    // Arrotonda a 2 cifre decimali (restituisce una stringa)
    let fixed = num.toFixed(2); // risultato: "12.35"
    console.log(fixed);

    // Arrotonda per eccesso
    let ceil = Math.ceil(num); // risultato: 13
    console.log(ceil);

    // Arrotonda per difetto
    let floor = Math.floor(num); // risultato: 12
    console.log(floor);

    // Arrotonda a una cifra decimale e converte in numero
    let num2 = 12.36;
    let num3 = +(num2.toFixed(1)); // risultato: 12.4
    console.log(num3);


- trasformare numero in stringa

    let numero = 123;
    let stringa = numero.toString();
    console.log(typeof stringa); // Output: string
    console.log(stringa); // Output: "123"

- if/else

*/

// #preparazione
// chidere quanti km vuole percorrere l'utente e salvarlo in una variabile salvandoli in forma numerica
const travelLength = Number(prompt("Quanti km di vuoi percorre con il nostro treno"));


// chiedere l'età e salvarlo in una varibile salvandoli in forma numerica
const travelerAge = Number(prompt("Quanti anni hai?"));

// preparazione uscita
let discountedTicketPrice = "";
let result = "";

//verifica numeri e che tipo di dato sono
console.log(travelLength);
console.log(typeof travelLength);
console.log(travelerAge);
console.log(typeof travelerAge);

// #calcoli (elaborazione)
// creare una variabile del prezzo al km
const pricePerKm = 0.21;
100
// calcolare prezzo intero del biglietto e salvarlo in una variabile
const ticketPrice = travelLength * pricePerKm;

//verifico primo risultato
console.log(ticketPrice);
console.log(typeof ticketPrice);

// if/else -> in base all'età applicare uno sconto

if (travelerAge < 18) {
    discountedTicketPrice = ticketPrice * 0.8;
} else if (travelerAge >= 18 && travelerAge < 65) {
    discountedTicketPrice = ticketPrice * 1;
} else {
    100
    discountedTicketPrice = ticketPrice * 0.6;
}

//verifca risultato prima della fine esercizio commentare quando il risultato torna 
console.log(discountedTicketPrice);
console.log(typeof discountedTicketPrice); 10


// #output in forma umana
// convertire il risultato con al massimo due cifre decimali e in stringa
result = discountedTicketPrice.toFixed(2);


console.log(result);
console.log(typeof result);


