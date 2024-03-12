// Traccia 3:
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


// let str= (' i topi non avevano nipoti');
// str = str.replace(/\W/g, "");

// function palindroma(stringa) {
//     if (stringa === stringa.split('').reverse().join('')) {
//         return(true);
        
//     } else {
//         return(false);
        
//     }
// }

// palindroma(str);

// Traccia 4: 
// Scrivere una funzione che permetta di filtrare soltanto le parole all’interno di un array:
// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

// Suggerimento: provate a filtrare in base al tipo di dato (operatore typeof)


// let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

// function filtro(stringa) {
//     let parola = stringa.filter(el => typeof el === 'string');
//     stringa = stringa.filter(el => typeof el === 'string');
//     return parola
// }
// console.log(filtro(mixArray));


// Traccia 5:
//  Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
//  (modificato)

let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
let c = [];

function calcolatore(input1 , input2, Output , operatore) {
    for ( i = 0 ; i < a.length ; i++ ){
        if (operatore == '+') {
            Output.push(input1 [i] + input2 [i]);
            
        }else if (operatore == '*') {
            Output.push(input1 [i] * input2 [i]);
            
        }else if (operatore == '-') {
            Output.push(input1 [i] - input2 [i]);
            
        }else if (operatore == '/') {
            Output.push(input1 [i] / input2 [i]);
            
        }

         else {
            
        }
        
    
}
    return calcolatore
}
calcolatore(a , b , c , '-');
console.log(c);





