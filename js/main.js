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
  renderMessage();
  // USED FOR FREE SPINS IF POSSIBLE
  // countSpins();
};

function popUp () {
  // spinButtonEl.addEventListener('click', function(){
  //   alert('Click "OK" confirm if over the age of 18 years old, otherwise please do not enter.')})
  //   return;
  };
  
// USED TO TELL PLAYER THEY WON ANY AMOUNT OF MONEY
// REPORT THE WINNINGS BELOW "WIN TOTAL" AREA
function renderMessage() {
  // START UP ANIMATION
  // betLogic();
  function renderStartMessage() {}
};

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
  const w = winArray
  const v = VALUES
  // CHECK WINNER FUNCTIONS
  rowOneCheck();
  rowTwoCheck();
  rowThreeCheck();

  //CHECK ROW 1
  function rowOneCheck() {
    // ROW ONE 5 IN A ROW
    if (w[0] === w[1] && w[1] === w[2] && w[2] === w[3] && w[3] === w[4]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2] === w[3] && w[3] === w[4]) {
          // ADD A JACKPOT NOTIFICATION
          winTotal = ((v[w[0]] * 5) * 5);
          balance += winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('Dragon 5-in-a-row jackpot! You won', winTotal)
          return;
        } else {
          winTotal = ((v[w[0]] * 5) * 3);
          balance += winTotal;
          winnerEl.innerText = winTotal;
          console.log('5-in-a-row! You won', winTotal);
          return;
      }
    }
    // ROW ONE 4 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2] === w[3]) {
          // DRAGON GET'S A LITTLE KICKER - DOUBLE ACTUAL CREDITS
          winTotal = ((v[w[0]] * 4) * 2);
          balance += winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('4 dragons! You won', winTotal)
          return;
        } else {
          winTotal = (v[w[0]] * 4);
          balance += winTotal
          winnerEl.innerText = winTotal;
          console.log('4-in-a-row! You won', winTotal);
          return;
        }
      }
    // ROW ONE 3 IN A ROW
    } else if (w[0] === w[1] && w[1] === w[2]) {
      if(true) {
        if(w[0] === 5 && w[0] === w[1] && w[1] === w[2] && w[2]) {
          winTotal = v[w[0]] * 3;
          balance += winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('3 dragons! You won', winTotal)
          return;
        } else {
          winTotal = v[w[0]] * 3;
          balance += winTotal;
          winnerEl.innerText = winTotal;
          console.log('3-in-a-row! You won', winTotal);
        return;
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
          winTotal = ((v[w[5]] * 5) * 5);
          balance = balance + winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('Dragon 5-in-a-row jackpot! You won', winTotal)
          return;
        } else {
          winTotal = ((v[w[5]] * 5) * 3);
          balance = balance + winTotal;
          winnerEl.innerText = winTotal;
          console.log('5-in-a-row! You won', winTotal);
          return;
        }
      }

    // ROW TWO 4 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
      if(true) {
        if(w[5] === 5 && w[5] === w[6] && w[6] === w[7] && w[7] === w[8]) {
          winTotal = ((v[w[5]] * 4) * 2);
          balance = balance + winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('4 dragons! You won', winTotal)
          return;
        } else {
          winTotal = (v[w[5]] * 4);
          balance += winTotal
          winnerEl.innerText = winTotal;
          console.log('4-in-a-row! You won', winTotal);
        }
      }
    // ROW TWO 3 IN A ROW
    } else if (w[5] === w[6] && w[6] === w[7]) {
      if(true) {
          if(w[5] === 5 && w[5] === w[6] && w[6] === w[7]) {
            winTotal = v[w[5]] * 3;
            balance += winTotal;
            winnerEl.innerHTML = winTotal;
            console.log('3 dragons! You won', winTotal)
            return;
        } else {
            winTotal = v[w[5]] * 3;
            balance += winTotal;
            winnerEl.innerText = winTotal;
            console.log('3-in-a-row! You won', winTotal);
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
          winTotal = ((v[w[10]] * 5) * 5);
          balance += winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('Dragon 5-in-a-row jackpot! You won', winTotal)
          return;
        } else {
        winTotal = ((v[w[10]] * 5) * 3);
        balance += winTotal;
        winnerEl.innerText = winTotal;
        console.log('5-in-a-row! You won', winTotal);
      }
    }

    // ROW THREE 4 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12] && w[12] === w[13]) {
          winTotal = ((v[w[10]] * 4) * 2);
          balance += winTotal;
          console.log('4 dragons! You won ', winTotal)
          return;
        } else {
        winTotal = (v[w[10]] * 4);
        balance += winTotal
        winnerEl.innerText = winTotal;
        console.log('4-in-a-row! You won ',winTotal);
      }  
    }

    // ROW THREE 3 IN A ROW
    } else if (w[10] === w[11] && w[11] === w[12]) {
      if(true) {
        if(w[10] === 5 && w[10] === 5 && w[10] === w[11] && w[11] === w[12]) {
          winTotal = v[w[10]] * 3;
          balance += winTotal;
          winnerEl.innerHTML = winTotal;
          console.log('3 dragons! You won ', winTotal)
        return;
      } else {
        winTotal = v[w[10]] * 3;
        balance += winTotal;
        winnerEl.innerText = winTotal;
        console.log('3-in-a-row! You won ', winTotal);
        }
      }
    }
  }
    console.log(balance)
};

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