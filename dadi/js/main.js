alert("Utente 1: premi Ok Per lanciare il dado");
var utente1 = Math.floor(Math.random() * 6 + 1);
console.log(utente1);

alert("Utente 2: premi Ok Per lanciare il dado");
var utente2 = Math.floor(Math.random() * 6 + 1);
console.log(utente2)

if (utente1 === utente2) {
    console.log("Parità!")
} else if (utente1 > utente2) {
    console.log("Utente 1, hai vinto!")
} else {
    console.log("Utente 2, hai vinto!")
}
