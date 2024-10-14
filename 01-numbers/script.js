// Ciao ragazzi,
// esercizio di oggi: Biglietto del treno
// cartella/repo js-biglietto-treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon lavoro!

/*RACCOLTA DATI */
// quanti km deve percorrere
const tripDistance = parseInt(prompt('Qualè la distanza da percorrere'));
console.log(tripDistance);
//età del passegero 
const passenegerAge= parseInt(prompt('Età del passegero'));
console.log(passenegerAge);

const kmPrice= 0.21;


/*ELABORAZIONE */
//diepnedendo da quanti km calcolare il prezo del biglietto (ogni km sono 0.21 €) numero di km * 0.21€
let totalPrice= (tripDistance * kmPrice)
 
// se il passegero el minore di 18 anni si applica uno sconto del 20%
if(passenegerAge < 18 ){
 const kidDiscount= totalPrice * 0.20;

    console.log('Essendo minore di 18 anni si applica lo sconto infantile di un -20% sull totale del biglietto. totale = ' + (totalPrice - kidDiscount) + '€')
}
//se il passegero e maggiore di 65 anni si applica uno sconto del 40%
else if(passenegerAge > 65){
    const elderDiscount= totalPrice * 0.40;

    console.log('Essendo maggiore di 65 annisi applica lo sconto terza età di -40% sull totale del biglietto. totale = ' + (totalPrice - elderDiscount) + '€')
}
//altrementi il prezzo rimane il calcolato ariginalemte 
else{
    console.log('il totale sarebbe di = ' + (totalPrice) + '€');
}



/*OUTPUT*/
//mostrare il prezzo del biglietto con un massimo di 2 decimali 
