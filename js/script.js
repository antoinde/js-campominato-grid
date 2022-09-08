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

// Dichiaro array di controllo numeri
let controllNumberArray=[];

//Clicco sul pulsante
const button = document.getElementById('start-button');


button.addEventListener('click', function() {
    console.log("Pulsante di avvio cliccato!");

    //Prendo il contenitore dove mettere gli elementi
    const contentContainer = document.getElementById('content');

    //Aggiungo classe sfondo di gioco verde acqua a content
    contentContainer.className = 'content2';

    //Svuoto il contenitore (così se riclicco non si aggiungono altri pulsanti)
    contentContainer.innerHTML='';
    
    //Inserisco gli elementi
    for(let i=1; i<=100; i++) {

        //creo l'elemento
        const element = document.createElement('div');

        //gli assegno la classe
        element.className = 'square';

        //inserisco il numero dentro l'elemento (se voglio il BONUS questo lo disattivo)
        element.innerHTML += i;

        /* 
            BONUS   
            Creo una funzione che mi genera un valore random da 1 a 100
            Lo aggiunge in un array di controllo
            Se non è inserito dentro l'array di controllo, inserisce il numero
            Altrimenti ne genera un altro
            
            (non completato)
        */
        
        //al click, se pari -> sfondo AZZURRO        se dispari -> sfondo VERDE
        element.addEventListener('click', function(){
            if(element.innerHTML %2==0) // aggiungi classe pari
            element.classList += ' pari';
            else // aggiungi classe dispari 
            element.classList += ' dispari';

            // mostra in console il numero con la cella assegnata
            console.log(`Cella numero ${i} cliccata!`);
        })

        //pusha l'elemento su html
        contentContainer.append(element);
    }


       

})




// ---------------- FUNZIONI --------------------

