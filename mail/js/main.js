/**********************            EMAIL           **************** */

// creo un array con 4-5 email dentro 
// prompt all'utente chiedendogli la sua email 
//controllo se l'email esiste nella lista
// + (bonus) mi assicuro che l'utente abbia aggiunto una email, altrimenti gli compare un avviso 


var indirizziEmail = ["pippo80@yopmail.com", "minnie80@yopmail.com", "topolino80@yopmail.com", "pluto80@yopmail.com", "daisy80@yopmail.com", "pietro80@yopmail.com"];
var emailUtente = prompt("Ciao, Pietro. Per accedere inserisci il tuo indirizzo e-mail:");

// Metodo 1: indexOf() cerca l'elemento e se non lo trova dà come risultato -1. Quindi se il risultato è diverso ! da -1, l'elemento c'è:

/*
if (indirizziEmail.indexOf(emailUtente) !== -1) {
    console.log("Bentornato!")
    document.getElementById("email").innerHTML = "Hai digitato: " + emailUtente;
    document.getElementById("avviso").innerHTML = "Bentornato!";
} else {
    console.log("Sembra che la tua email non sia registrata. Hai dimenticato il tuo indirizzo email? Suggerimento: nome80@yopmail.com")
    document.getElementById("email").innerHTML = "Hai digitato: " + emailUtente;
    document.getElementById("avviso").innerHTML = "... Sembra che la tua email non sia registrata. Ritenta...";
}
*/

//Metodo 2: includes //

if (indirizziEmail.includes(emailUtente)) {
    console.log("la tua email è presente!");
    document.getElementById("email").innerHTML = "Hai digitato: " + emailUtente;
    document.getElementById("avviso").innerHTML = "Bentornato!";
} else {
    console.log("la tua email non è presente. L'hai dimenticata? Suggerimento: nome80@yopmail.com");
    document.getElementById("email").innerHTML = "Hai digitato: " + emailUtente;
    document.getElementById("avviso").innerHTML = "... Sembra che la tua email non sia registrata. Ritenta...";
}