// WILL DESIGN GAME SO IT CAN BE TRIMMED DOWN TO 3 X 3 CELLS IF NEEDED

/*----- constants -----*/

// WILL CREATE OBJECT WITH EACH ITEM BELOW WITH NAME, INDEX, VALUE, ETC..
// IF WE ADD 5 IN A ROW ADD A NEW CHARACTER/CARD
// EMOJIS
CHARACTERS = {
  1: '💲', // JACK / value = 10
  2: '💵', // QUEEN / value = 10
  3: '👑', // KING / value = 10
  4: '💎', // ACE / value = 25
  5: '🐉', // KOMODO DRAGON / value = 50
}

VALUES = {
  1: 10,
  2: 10, 
  3: 10, 
  4: 25, 
  5: 50,
}



/*----- state variables -----*/
// USE ID'S TO TARGET SPECIFIC CELLS
let winArray = ['','','','','','','','','','','','','','','',];
let renderArray;
let checkWinArray;

// REPRESENTS THE 15 CELLS THAT HOLD VALUES TO DETERMINE WINNER
// **MAY CHANGE NAME
let cells;

// CURRENT BALANCE THAT REACTS TO ADDING, 
// HAVE POPUP TO CHOOSE THE AMOUNT TO START IN BANK
let balance = 1000;

// BALANCE THAT IS WON AFTER EVERY TIME SPIN BUTTON IS PRESSED
let winTotal = 0;
let win;
let rowWin;

// AMOUNT OF CREDITS USED PER SPIN
let betAmount = 10;

// WINNING COMBONATIONS
// **TBD ON POSSIBLE MULTI-WIN COMBOS / USER SELECTED WIN COMBO AMOUNTS
// USING AN ARRAY OF EMPTY STRINGS TO FIND THE WINNING COMOBS USING LOOP
const combo = [
  // FOUR ACROSS WINS
  [0,1,2],
  [5,6,7],
  [10,11,12],
  // FOUR ACROSS WINS
  [0,1,2,3],
  [5,6,7,8],
  [10,11,12,13],
  // FIVE ACROSS WINS
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
];


/*----- cached elements  -----*/


/*----- event listeners -----*/


// NAME OF THE SLOT MACHINE CELLS
const bodyEl = document.querySelector('body');
const screenEls = document.querySelectorAll('cells');
const spinButtonEl = document.getElementById('spin-button');
const cellContainer = document.querySelector('container');
const divEls = document.querySelectorAll('div');
const messageEl = document.querySelector('h2');
const balanceEl = document.getElementById('balance')
balanceEl.innerText = balance
const winnerEl = document.getElementById('win-amount')


/*----- functions -----*/


initialize();

function initialize() {
  // popUp();
  // gameBoard;
  let winArray;
  let winTotal;
  let balance;
  let betAmount;
  // spinReel();
  renderScreen();
  // USED FOR FREE SPINS IF POSSIBLE
  // countSpins();
};

function popUp () {
  // spinButtonEl.addEventListener('click', function(){
  //   alert('Click "OK" confirm if over the age of 18 years old, otherwise please do not enter.')})
  //   return;
  };

function renderMessage(win, char, dragon, jp) {
  if (dragon === `${dragon}`) {
    dragonMessage(win, char, dragon)
  } else 
    winMessage(win, char)
}

// THIS IS USED IN THE RENDERSCREEN FUNCTION TO "SPIN" THE SLOTS FOR RANDOM NUMBERS
function spinReel() {
  winArray = Array.from({length: 15}, () =>Math.floor(Math.random() * 5) + 1);
  winnerEl.innerText = 0;
  betAmount = balance -= 10;
  balanceEl.innerText = balance;
  checkWinner();
  if (balance < betAmount) {
    console.log("You don't have enough credits, change bet amount or add more credits to continue")
    spinButtonEl.style.backgroundColor = 'darkgrey';
    spinButtonEl.addEventListener('click', function(){
    })
  }
  if (balance <= 0) {
    alert("You're out of money, game over!")
    spinButtonEl.style.visibility = 'hidden';
    spinButtonEl.addEventListener('click', function(){
    messageEl.innerText = "You're out of credits, add more to continue"
    })
  }
}

// MASTER renderScreen() FUNCTION WITHOUT VALUES ASSOCIATED IN THE CHARACTERS OBJECT
// CHECK THE RESULTS THAT END UP IN screenEls
// COMPARE AGAINST THE cellArray and winningCombos FOR WINNERS
// LOOK UP TO HIGHLIGHT WINNERS
// POSSIBLY USED TO RESET THE screen
function renderScreen() {
  spinButtonEl.addEventListener('click', function(){
    spinReel(); // NEED TO CALL SPINREEL IN RENDER TO MAKE SURE THE NUMBERS ARE RESET WHEN BUTTON IS PRESSED
    // console.log(winArray)
    const cells = document.querySelectorAll('div');
    winArray.forEach(function(cell, index) {
      const getChars = CHARACTERS[cell];
      divEls[index].innerText = getChars;
    })
    // checkJackpot();
    // checkWinner();
  })
};

// THIS FUNCTION CHECKS WINNERS AGAINS THE winArray ARRAY. 3 IN A ROW, 4 IN A ROW, 5 IN A ROW 
function checkWinner() {
  const w = winArray;
  const v = VALUES;
  const c = CHARACTERS;
  let win;
  messageEl.innerText = 'Spin to win!'
  // CHECK WINNER FUNCTIONS
  rowOneCheck()
  rowTwoCheck()
  rowThreeCheck()


  //CHECK ROW 1
  function rowOneCheck() {
    // ROW ONE 5 IN A ROW
    if (w[0] === w[1] && w[1] === w[2] && w[2] === w[3] && w[3] === w[4]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2] === w[3] && w[3] === w[4]) {
          // ADD A JACKPOT NOTIFICATION
          jackpot
          win = ((v[w[0]] * 5) * 5);
          renderMessage(win, c[w[0]], c[w[0]], true)
          winTotal += win;
          balance += win;
        } else {
          win = ((v[w[0]] * 5) * 3);
          renderMessage(win, c[w[0]])
          winTotal += win;
          balance += win;
        }
    }
    // ROW ONE 4 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
          // DRAGON GET'S A LITTLE KICKER - DOUBLE ACTUAL CREDITS
          win = ((v[w[0]] * 4) * 2);
          renderMessage(win, c[w[0]])
          winTotal += win;
          balance += win;
        } else {
          renderMessage(win, c[w[0]])
          win = (v[w[0]] * 4);
          winTotal += win;
          balance += win;
        }
      }
    // ROW ONE 3 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2]) {
          win = v[w[0]] * 3;
          renderMessage(win, c[w[0]], c[w[0]])
          winTotal += win;
          balance += win;
        } else {
          win = v[w[0]] * 3;
          renderMessage(win, c[w[0]])
          winTotal += win;
          balance += win;
          // winnerEl.innerText = winTotal;
          // messageEl.innerText = 
          //   `3-in-a-row!
          //   You won ${winTotal}`
          // totalWin();
        }
      }
    }
  }

  // CHECK ROW 2
  function rowTwoCheck() {

    // ROW TWO 5 IN A ROW
    if (w[5] === w[6] && w[6] === w[7] && w[7] === w[8] && w[8] === w[9]) {
      if(true) {
        if(w[5] === 5 && w[5] === 5 && w[5] === w[6] && w[6] === w[7] && w[7] === w[8] && w[8] === w[9] ) {
          // ADD A JACKPOT NOTIFICATION
          win = ((v[w[5]] * 5) * 5);
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
        } else {
          rowWin = ((v[w[5]] * 5) * 3);
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
        }
      }

    // ROW TWO 4 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
      if(true) {
        if(w[5] === 5 && w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
          win = ((v[w[5]] * 4) * 2);
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
        } else {
          win = (v[w[5]] * 4);
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
        }
      }

    // ROW TWO 3 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7]) {
      if(true) {
        if(w[5] === 5 && w[5] === w[6] && w[6] === w[7]) {
          win = v[w[5]] * 3;
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
        } else {
          win = v[w[5]] * 3;
          renderMessage(win, c[w[5]])
          winTotal += win;
          balance += win;
          // winnerEl.innerText = winTotal;
          // messageEl.innerText = 
          // `3-in-a-row!
          // You won ${winTotal}`
        }
      }
    }
  }

  // CHECK ROW 3
  function rowThreeCheck() {

    // ROW THREE 5 IN A ROW
    if (w[10] === w[11] && w[11] === w[12] && w[12] === w[13] && w[13] === w[14]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12] && w[12] === w[13] && w[13] === w[14]) {
          win = ((v[w[10]] * 5) * 5);
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
          return;
        } else {
          win = ((v[w[10]] * 5) * 3);
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
        }
      }

    // ROW THREE 4 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
          win = ((v[w[10]] * 4) * 2);
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
        } else {
          win = (v[w[10]] * 4);
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
      }  
    }

    // ROW THREE 3 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12]) {
          win = v[w[10]] * 3;
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
      } else {
          win = v[w[10]] * 3;
          renderMessage(win, c[w[10]])
          winTotal += win;
          balance += winTotal;
        // winnerEl.innerText = winTotal;
        // messageEl.innerText = 
        //     `3-in-a-row!
        //     You won ${winTotal}`
        //     totalWin();
        }
      }
    }
  }
    // console.log(balance)
};



function dragonMessage(win, char, dragon) {
  const dragonMessage = document.createElement('p');
  dragonMessage.innerText = `${dragon} let you win ${win}!`;
  messageEl.appendChild(dragonMessage);
}

function winMessage(win, char) {
  const winMessageEl = document.createElement('p');
  winMessageEl.innerText = `You won ${win}! with ${char}`;
  messageEl.appendChild(winMessageEl);
}

function jackpot() {
  phaseOne()
  return;
}

function phaseOne() {
  bodyEl.innerText = `${CHARACTERS[5]}`;
  bodyEl.style.justifyContent = 'center';
  bodyEl.style.alignContent = 'center';
  bodyEl.style.fontSize = '50vmin';
}








// function totalWin() {
//   if (winTotal.length > 1) {
//     const winMessageEl = document.createElement('p');
//     winMessageEl.innerText = 
//     `Multi-line Win!
//     You won ${winTotal}`;
//     messageEl.appendChild(winMessageEl);
//   } else {
//     return;
//   }

  // for (let i = 0; i < win; i++) {
  //   total = win[i];
  //   console.log(win[i])
  //   const winMessageEl = document.createElement('p');
  //   winMessageEl.innerText = `${total}`;
  //   messageEl.appendChild(winMessageEl);

  // }
// }

function betLogic() {
  // USE THE BET AMOUNT TO MULTIPLY THE VALUE OF EACH CHARACTER VALUE
  // BET AMOUNT IS LOCATED IN THE spinReel() FUCNTION
  betAmount = balance -= 10;
  betTotal
  balace
}



// ICEBOX!!
//FUNCTIONS MAY NOT USE
// function countSpins() {};
// function screenAnimation(){};
// function addMoney () {};

// ICEBOX EVENT LISTENERS
// const betAmountButton = document.getElementById('bet-amount');
// const addMoney = document.getElementById('add-money');

// TRACKS THE TOTAL AMOUNT BET PER BUTTON CLICK
// **MAY REMOVE
// let winAmount;

// IF POSSIBLE IDEAS
// let freeSpins;
// let jackpotAnimation;

// THESE ARE THE 5 ACROSS WINS
// [1,2,3,4,5], // first row super
// [6,7,8,9,10], // second row super
// [11,12,13,14,15], // thrid row super
// THESE ARE THE CROSS WIN COMBOS
// [1,2,8,14,15],
// [11,12,8,4,5],

// BUTTONS
// **MAY NOT HAVE RIGHT AWAY
// let increaseBet;
// let decreaseBet;

// IF POSSIBLE BUT UNLIKELY
// let stopButton;

// TO BE MADE LOOP TO CHECK WINNER
// function checkWinner()
   //   for (let i = 0; i < combo.length; i++) {
     //     for (let j = 0; j < combo[i].length; j++) {
       // console.log(winArray[combo[i][j]])
       // console.log(combo[i])
       // console.log(combo[i][0])
       // console.log(combo[i][j])
       // console.log(winArray[combo[i][j]])
       // console.log(winArray[combo[i][j]], combo[i][j])
 //     }
  //   }
  // };