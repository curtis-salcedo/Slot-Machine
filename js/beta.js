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
  1: 1,
  2: 1, 
  3: 1, 
  4: 2.5, 
  5: 5,
}


/*----- state variables -----*/
// USE ID'S TO TARGET SPECIFIC CELLS
let winArray = ['','','','','','','','','','','','','','','',];
let checkWinArray;

// REPRESENTS THE 15 CELLS THAT HOLD VALUES TO DETERMINE WINNER
let cells;

// CURRENT BALANCE THAT REACTS TO ADDING, 
// HAVE POPUP TO CHOOSE THE AMOUNT TO START IN BANK
let balance = 29;

// BALANCE THAT IS WON AFTER EVERY TIME SPIN BUTTON IS PRESSED
let winTotal;
let win;

// CREDITS USED TO SPIN
let betAmount;

// **TBD ON POSSIBLE MULTI-WIN COMBOS / USER SELECTED WIN COMBO AMOUNTS
// WINNING COMBONATIONS
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
const messageEl = document.getElementById('win-summary');
const balanceEl = document.getElementById('balance-amount')
const winnerAmountEl = document.getElementById('win-total')
const betButtonEls = document.querySelector(".buttons")
const betFiveButton = document.getElementById('bet-five')
const betTenButton = document.getElementById('bet-ten')
const betTwentyFiveButton = document.getElementById('bet-twentyfive')

balanceEl.innerText = balance

/*----- functions -----*/


initialize();

function initialize() {
  // popUp();
  let winArray;
  let winTotal;
  balance;
  let betAmount;
  selectBet();
  renderScreen();
  // countSpins();
};

function selectBet() {
  spinButtonEl.style.visibility = 'hidden';
  if (balance >= 5) {
    betButtonEls.style.visibility = 'visible'
  }
  
  betFiveButton.addEventListener('click', function(e) {
    betAmount = 5;
    messageEl.innerText = 'PRESS THE SPIN BUTTON'
    betFiveButton.classList.add('bet-button-active')
    betTenButton.classList.remove('bet-button-active')
    betTwentyFiveButton.classList.remove('bet-button-active')
    spinButtonEl.style.visibility = 'visible';
  })
  betTenButton.addEventListener('click', function(e) {
    betAmount = 10;
    messageEl.innerText = 'PRESS THE SPIN BUTTON'
    betTenButton.classList.add('bet-button-active')
    betFiveButton.classList.remove('bet-button-active')
    betTwentyFiveButton.classList.remove('bet-button-active')
    spinButtonEl.style.visibility = 'visible';
  })
  betTwentyFiveButton.addEventListener('click', function(e) {
    betAmount = 25;
    messageEl.innerText = 'PRESS THE SPIN BUTTON'
    betTwentyFiveButton.classList.add('bet-button-active')
    betFiveButton.classList.remove('bet-button-active')
    betTenButton.classList.remove('bet-button-active')
    spinButtonEl.style.visibility = 'visible';
  })
}

function popUp () {
  // spinButtonEl.addEventListener('click', function(){
  //   alert('Click "OK" confirm if over the age of 18 years old, otherwise please do not enter.')})
  //   return;
  };

function renderMessage(win, char, dragon) {
  if (dragon === `${dragon}`) {
    dragonMessage(win, char, dragon)
  } else 
    winMessage(win, char)
}

// THIS IS USED IN THE RENDERSCREEN FUNCTION TO "SPIN" THE SLOTS FOR RANDOM NUMBERS
function spinReel() {
  winArray = Array.from({length: 15}, () =>Math.floor(Math.random() * 5) + 1);
  balance -= betAmount
  console.log(balance)
  winnerAmountEl.innerText = 0;
  balanceEl.innerText = balance;
  checkButtons()
  checkWinner()
}

// MASTER renderScreen() FUNCTION WITHOUT VALUES ASSOCIATED IN THE CHARACTERS OBJECT
// CHECK THE RESULTS THAT END UP IN screenEls
// COMPARE AGAINST THE cellArray and winningCombos FOR WINNERS
function renderScreen() {
  spinButtonEl.addEventListener('click', function(){
    spinReel(); // NEED TO CALL SPINREEL IN RENDER TO MAKE SURE THE NUMBERS ARE RESET WHEN BUTTON IS PRESSED
    // console.log(winArray)
    const cells = document.querySelectorAll('div');
    winArray.forEach(function(cell, index) {
      const getChars = CHARACTERS[cell];
      divEls[index].innerText = getChars;
    })
  })
};

// THIS FUNCTION CHECKS WINNERS AGAINS THE winArray ARRAY. 3 IN A ROW, 4 IN A ROW, 5 IN A ROW 
function checkWinner() {
  const w = winArray;
  const v = VALUES;
  const c = CHARACTERS;
  const b = betAmount;
  let win;
  messageEl.innerText = ''
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
          win = ((v[w[0]] * 5) * 5) * b;
          betLogic(win)
          renderMessage(win, c[w[0]], c[w[0]])
        } else {
          win = ((v[w[0]] * 5) * 3) * b;
          betLogic(win)
          renderMessage(win, c[w[0]])
        }
      }
      // ROW ONE 4 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
          // DRAGON GET'S A LITTLE KICKER - DOUBLE ACTUAL CREDITS
          win = ((v[w[0]] * 4) * 2) * b;
          betLogic(win)
          renderMessage(win, c[w[0]])
        } else {
          win = (v[w[0]] * 4) * b;
          betLogic(win)
          renderMessage(win, c[w[0]])
        }
      }
      // ROW ONE 3 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2]) {
          win = v[w[0]] * 3 * b;
          betLogic(win)
          renderMessage(win, c[w[0]], c[w[0]])
        } else {         
          win = v[w[0]] * 3 * b;
          betLogic(win)
          renderMessage(win, c[w[0]])
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
          win = ((v[w[5]] * 5) * 5) * b;
          betLogic(w)
          renderMessage(win, c[w[5]], c[w[5]])
        } else {
          win = ((v[w[5]] * 5) * 3) * b;
          betLogic(w)
          renderMessage(win, c[w[5]])
        }
      }
      
      // ROW TWO 4 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
      if(true) {
        if(w[5] === 5 && w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
          win = ((v[w[5]] * 4) * 2) * b;
          betLogic(w)
          renderMessage(win, c[w[5]])
        } else {
          win = (v[w[5]] * 4) * b;
          betLogic(w)
          renderMessage(win, c[w[5]])
        }
      }
      
      // ROW TWO 3 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7]) {
      if(true) {
        if(w[5] === 5 && w[5] === w[6] && w[6] === w[7]) {
          win = (v[w[5]] * 3) * b;
          betLogic(win)
          renderMessage(win, c[w[5]])
        } else {
          win = (v[w[5]] * 3) * b;
          betLogic(win)
          renderMessage(win, c[w[5]])
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
          win = ((v[w[10]] * 5) * 5) * b;
          betLogic(win)
          renderMessage(win, c[w[10]], c[w[10]])
          return;
        } else {
          win = ((v[w[10]] * 5) * 3) * b;
          betLogic(win)
          renderMessage(win, c[w[10]])
        }
      }
      
      // ROW THREE 4 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
          win = ((v[w[10]] * 4) * 2) * b;
          betLogic(win)
          renderMessage(win, c[w[10]])
        } else {
          win = (v[w[10]] * 4) * b;
          betLogic(win)
          renderMessage(win, c[w[10]])
        }  
      }
      
      // ROW THREE 3 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12]) {
          win = (v[w[10]] * 3) * b;
          betLogic(w)
          renderMessage(win, c[w[10]])
        } else {
          win = (v[w[10]] * 3) * b;
          betLogic(win)
          renderMessage(win, c[w[10]])
        }
      }
    }
  }
};


function dragonMessage(win, char, dragon) {
  const dragonMessage = document.createElement('p');
  dragonMessage.innerText = `${dragon} let you win ${win}!`;
  messageEl.appendChild(dragonMessage);
}

function winMessage(win, char) {
  const winMessageEl = document.createElement('p');
  winMessageEl.innerText = `You won ${win}! with ${char}`;
  winMessageEl.style.fontSize = "2.25vmin"
  messageEl.appendChild(winMessageEl);
}

function betLogic(y) {
  if (y > 0) {
    winnerAmountEl.innerText = y;
    balance += y;
    console.log(balance)
    balanceEl.innerText = balance;
  } 
  checkButtons()
}

function checkButtons() {
  console.log(balance, win)
  balanceEl.innerText = balance;
  // IF CREDIT BALANCE UNDER 5; HIDE ALL BUTTONS AND WIN TOTAL AND DISPLAY BALANCE ONLY
  if (balance < 5) {
    messageEl.innerText = ("Add more credits to continue")
    spinButtonEl.style.visibility = 'hidden'
    betFiveButton.style.visibility = 'hidden'
    betTenButton.style.visibility = 'hidden'
    betTwentyFiveButton.style.visibility = 'hidden'
  }
  // IF CREDIT BALANCE IS 5 TO 9; HIDE BET AMOUNT 10 AND 25, AUTO SELECT BET AMOUNT 5, HIGHLIGHT BET 5
  if (balance >= 5 && balance < 10) {
    betFiveButton.style.visibility = 'visible'
    betTenButton.style.visibility = 'hidden'
    betTwentyFiveButton.style.visibility = 'hidden'
    betFiveButton.classList.add('bet-button-active')
    betTenButton.classList.remove('bet-button-active')
    betAmount = 5;
  }
  // IF CREDIT BALANCE IS 10 TO 24; DESELECT ALL BET BUTTONS AND HIDE SPIN BUTTON UNTIL CHOICE IS MADE
  if (balance >= 10 && balance <= 24) {
    betTenButton.style.visibility = 'visible'
    betTwentyFiveButton.style.visibility = 'hidden'
    betTenButton.classList.add('bet-button-active')
    betAmount = 10;
  }
  // IF CREDIT BALANCE IS 25 OR OVER; KEEP CURRENT SELECTION BUT ADD BET AMOUNT 25 TO BE VISIBLE
  if (balance >= 25) {
    betFiveButton.style.visibility = 'visible'
    betTenButton.style.visibility = 'visible'
    betTwentyFiveButton.style.visibility = 'visible'
  }
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

// function betLogic() {
//   // USE THE BET AMOUNT TO MULTIPLY THE VALUE OF EACH CHARACTER VALUE
//   // BET AMOUNT IS LOCATED IN THE spinReel() FUCNTION
//   betAmount = balance -= 10;
//   betTotal
//   balace
// }



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