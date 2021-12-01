// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


// creo la griglia del livello easy 10x10
const row = 10;
const col = 10;
const numberSquare = row * col;


// seleziono il mio container per creargli all'interno dei div
document.getElementById('gridConatiner');

// creo un ciclo for per creare tanti div con all'interno dei numeri
for (let i = 0; i < numberSquare; i++) {
  const square = document.createElement('div');
  square.classList.add('square', 'easy');
  console.log(square);
  
  gridContainer.append(square);
  
}
