//creo un alert (non prompt!!)
//assegno all'utente 1 la sua variabile: il numero a caso, che si trova con Math.random.
//con Math.random vengono numeri a caso fra 0 e 1
//quindi moltiplico Math.random per 6 così escono numeri fra 1 e 6... anche se non sono sicura che funzioni così 
// Uso Math.ceil prima di Math.random per far uscire solo numeri interi arrotondati per eccesso (così esce facilmente anche 6)
//ripeto il tutto anche per l'utente 2
//Se utente1 > utente2... se è ===... altrimenti... 


alert("Utente 1: premi Ok Per lanciare il dado");
var LancioUtente1 = Math.ceil(Math.random() * 6);
console.log(LancioUtente1);

alert("Utente 2: premi Ok Per lanciare il dado");
var LancioUtente2 = Math.ceil(Math.random() * 6);
console.log(LancioUtente2)

if (LancioUtente1 === LancioUtente2) {
    console.log("Parità!")
} else if (LancioUtente1 > LancioUtente2) {
    console.log("Utente 1, hai vinto!")
} else {
    console.log("Utente 2, hai vinto!")
}
