

// Creare Una funziona per capire se la parola è palindroma

var word = prompt("Inserisci una parola");
console.log(word);

var parolaReverse = "";
console.log(parolaReverse);

// Creare il ciclo per contare al contario

for (var i = word.length - 1; i >= 0; i--) {

  parolaReverse += word[i];

  console.log(parolaReverse);
}

// Stampare se la parola inversa è palindroma o NON PALINDROMA

if (word == parolaReverse) // se la parola inserita è uguale alla parola inversa allora è PALINDROMA
 {

  document.writeln('PAROLA PALINDROMA')

} else {

  document.writeln('PAROLA NON PALINDROMA')
}
