// PARI E DISPARI
var sceltaUtente = prompt('scegli tra pari o dispari');


// L’utente sceglie pari o dispari
while (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {

  alert('Input non valido! Digitare pari o dispari.')
  sceltaUtente = prompt('scegli tra pari o dispari');
  sceltaUtente = sceltaUtente.toLowerCase();

}

if (sceltaUtente == 'pari') {
  sceltaUtente = 'pari';

} else {
  sceltaUtente = 'dispari';

}


// inserisce un numero da 1 a 5.
var numeroUtente = parseInt(prompt('scegli un numero tra 1 e 5'));
console.log('numeroUtente prima loggata: ', numeroUtente);

while (isNaN(numeroUtente) || numeroUtente >= 6 || numeroUtente == 0) {

  alert('Errore! Devi inserire un numero tra 1 e 5.')
  numeroUtente = parseInt(prompt('scegli un numero tra 1 e 5'));
  console.log('numeroUtente errore inserimento: ', numeroUtente);

}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroCasuale(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

var numeroPC = numeroCasuale(1, 6);
console.log('numeroPC: ', numeroPC);


// Sommiamo i due numeri.
var sommaNumeri = numeroUtente + numeroPC;
console.log('sommaNumeri: ', sommaNumeri);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function ePari(numero) {

  return numero % 2 == 0;
}


// Dichiariamo chi ha vinto.
var messaggio = 'Numero utente: ' + numeroUtente + ', numeroPC: ' + numeroPC + ', somma numeri: ' + sommaNumeri;
if (ePari(sommaNumeri) && sceltaUtente == 'pari') {
  alert(messaggio + '. Congratulazioni hai vinto! ' + sommaNumeri + ' è pari.')

} else if (!ePari(sommaNumeri) && sceltaUtente == 'dispari') {
  alert(messaggio + '. Congratulazioni hai vinto! ' + sommaNumeri + ' non è pari.')

} else {
  alert(messaggio + '. Mi spiace!, stavolta vincono le macchine. Riprova!')

}
