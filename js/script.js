// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// FUNZIONE
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// prendo il bottone per avviare lo script
const playBtn = document.getElementById('play');

// creo l'evento al click
playBtn.addEventListener ('click', function () 
{
  // quando clicco pulisce tutto l'html per evitare di stampare a all'infinito
  const container = document.getElementById('gridContainer');
  container.innerHTML = '';
  // ccontrollo il valore scelto dall'utente
  const difficult = document.getElementById('difficulty').value;
  console.log(difficult);

  let array = [];
  for(let x = 1; x <= 4; x++){
    let num = getRndInteger(1, 100);
    //metterli in un array
    array.push(num);
  }
  //stamparli
  console.log('Numeri Bomba', array);
  
  // questa variabile mi serve per nascondere il grid
  let hidden = document.querySelector('.hidden');
  
  // creo le condizioni
  if (difficult == 'easy') {
    // creo la griglia del livello easy 10x10
    const rowEasy = 10;
    const colEasy = 10;
    const numberSquareEasy = rowEasy * colEasy;
    
    // seleziono il mio container per creargli all'interno dei div
    document.getElementById('gridConatiner');
    
    hidden.classList.add('active');
    // creo un ciclo for per creare tanti div con all'interno dei numeri
    for (let i = 1; i <= numberSquareEasy; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'easy');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);

      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
      });
    }
  } else if (difficult == 'medium') {
    // creo la griglia del livello medium 9x9
    const rowMedium = 9;
    const colMedium = 9;
    const numberSquareMedium = rowMedium * colMedium;
    hidden.classList.add('active');
    for (let i = 1; i <= numberSquareMedium; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'medium');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);

      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
      });
    }
  }  else if (difficult == 'hard') {
    // creo la griglia del livello hard 7x7
    const rowHard = 7;
    const colHard = 7;
    const numberSquareHard = rowHard * colHard;
    hidden.classList.add('active');
    for (let i = 1; i <= numberSquareHard; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'hard');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);

      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
        console.log(element.classList);
      });
    }
  }
})



