// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");


// Consegna:
/*
    -> L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    -> Ogni cella ha un numero progressivo, da 1 a 100.
    -> Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    -> Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. 
    -> Inoltre emette un messaggio in console con il numero della cella cliccata.

    BONUS:
    -> Potete sbizzarrirvi ad esempio mettendo i numeri da 1 a 100 in ordine random nelle celle, ma avete massima libertà!
*/
// Svolgimento:

//Clicco sul pulsante
let buttonHTML = document.getElementById("start-button");
buttonHTML.addEventListener('click', function(){
    console.log("Pulsante di avvio cliccato!")

    //Prendo il contenitore dove mettere gli elementi
    let containerHTML = document.getElementsByClassName("container");
    
    //Inserisco gli elementi
    for(let i=1; i<=100; i++) {
        
    }
})


