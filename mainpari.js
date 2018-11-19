

// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.

//  Creare funzione che genera un numero casuale tra un input minimo e uno massimo
function numeroRandom(min, max) {
  return Math.floor(Math.random () * (max-min +1) +min );

}
//console.log(numeroRandom);

var playerParioDisp = prompt("Scegli pari o dispari");

var playerNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
document.writeln( "Numero inserito player: " + playerNumber + "<br>");

// Creare funzione che stabilisce pari o dispari

function giocata(number) {

  var pari = true;

  if (number % 2 != 0) {

    var pari = false;
  }
  return pari;
}
//console.log(giocata);
// Stampare a schermo la scelta dell'utente tra pari e dispari

if (giocata === "pari") {

  var pari = true;
  document.writeln("Il player ha scelto: Pari" + "<br>")

}
else if (giocata === "dispari"){

  var dispari = false;
  document.writeln("Il player ha scelto: Dispari" + "<br>")

}
else {

  document.writeln("Il Player non ha inserito corretamente i dati" + "<br>");

}


// Riutilizzare la funzione per scegliere a caso un numero da 1 a 5 per il CPU

var cpuNumber = generatoreRandom(1, 5);
document.writeln('Numero Random CPU è: ' + cpuNumber + "<br>");


// Sommare il numero inserito dal player con il numero random del CPU

var somma = playerNumber + cpuNumber;
//console.log(somma);

// controllo se la somma sia pari o dispari

var sommacheck = giocata(somma);
console.log(sommacheck);

if (sommacheck === true) {

  document.writeln("Hai vinto!!!");

}
else {

  document.writeln("Hai perso!!!");
}
