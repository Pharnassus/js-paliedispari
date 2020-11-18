// Palindroma
// Chiedere all’utente di inserire una parola.

// programma funzionante senza funzione
var parolaUtente = prompt('Inserire una parola. Verificherò che la parola inserita sia o meno palindroma!')
console.log('Parola inserita dall\'utente: ', parolaUtente);

parolaUtente = parolaUtente.toLowerCase();
console.log('parolaUtente. ', parolaUtente);

if (parolaUtente == palindromo(parolaUtente)) {
  alert('Parola palindroma!')

} else {
  alert('Parola non palindroma!')

}

// Creare una funzione per capire se la parola inserita è palindroma.
 function palindromo(parola) {
   var letturaContraria = [];
   for (var i = parolaUtente.length - 1; i >= 0; i--) {
     letturaContraria += parolaUtente[i];
   }
   // console.log('letturaContraria: ', letturaContraria);

   return letturaContraria;
 }
