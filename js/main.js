// WILL DESIGN GAME SO IT CAN BE TRIMMED DOWN TO 3 X 3 CELLS IF NEEDED

/*----- constants -----*/

// WILL CREATE OBJECT WITH EACH ITEM BELOW WITH NAME, INDEX, VALUE, ETC..
// IF WE ADD 5 IN A ROW ADD A NEW CHARACTER/CARD
// EMOJIS
CHARACTERS = {
  1: '💲', // JACK / value = 10 
  2: '💵', // QUEEN / value = 10 
  3: '👑', // KING / value = 10 
  4: '💎', // ACE / value = 20 
  5: '🐉', // KOMODO DRAGON / value = 50 
  // JOKER, CARD SUITS
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
let balance = 100;

// BALANCE THAT IS WON AFTER EVERY TIME SPIN BUTTON IS PRESSED
let winTotal = 0;

// WINNING COMBONATIONS
// **TBD ON POSSIBLE MULTI-WIN COMBOS / USER SELECTED WIN COMBO AMOUNTS
// USING AN ARRAY OF EMPTY STRINGS TO FIND THE WINNING COMOBS USING LOOP
const combo = [
  // THESE ARE THE 3 ACROSS WINS
  [0,1,2], // first row standard
  [5,6,7], // second row standard
  [10,11,12], // third row standard
  // THESE ARE THE 4 ACROSS WINS
  [0,1,2,3], // first row extra
  [5,6,7,8], // second row extra
  [10,11,12,13], // third row extra

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
  // spinReel();
  renderScreen();
  checkWinner();
  renderMessage();
  // betLogic();
  // USED FOR FREE SPINS IF POSSIBLE
  // countSpins();
  winTotal = 0;
  checkBalance();
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
  
  // TBD BUT I THOUGHT IT MAY BE NEEDED FOR ADDED FEATURES
// function betLogic() {
//   winArray = Array.from({length: 15}, () =>Math.floor(Math.random() * 5) + 1);
// };

function spinReel() {
  winArray = Array.from({length: 15}, () =>Math.floor(Math.random() * 5) + 1);
  balance = balance - 10;
  balanceEl.innerText = balance;
  console.log(balance)
  // console.log(winArray)
}

// CHECK THE RESULTS THAT END UP IN screenEls
// COMPARE AGAINST THE cellArray and winningCombos FOR WINNERS
// LOOK UP TO HIGHLIGHT WINNERS

function checkWinner() {
  let w = winArray
  if (winArray[0] === winArray[1] && winArray[1] === winArray[2]) {
    balance = balance + 50;
    winTotal += 50;
    console.log('true', balance, winTotal);
  }
  if (winArray[5] === winArray[6] && winArray[6] === winArray[7]) {
    balance = balance + 50;
    winTotal += 50;
    console.log('true', balance, winTotal);
  }
  if (winArray[10] === winArray[11] && winArray[11] === winArray[12]) {
    balance = balance + 50;
    winTotal += 50;
    console.log('true', balance, winTotal);
  }
};
  
// POSSIBLY USED TO RESET THE screen
function renderScreen() {
  spinButtonEl.addEventListener('click', function(){
    spinReel(); // NEED TO CALL SPINREEL IN RENDER TO MAKE SURE THE NUMBERS ARE RESET WHEN BUTTON IS PRESSED
    console.log(winArray)
    const cells = document.querySelectorAll('div');
    winArray.forEach(function(cell, index) {
      const getChars = CHARACTERS[cell];
      divEls[index].innerText = getChars;
    })
    checkWinner();
  })
};

function checkBalance() {
  balanceEl.innerText = balance;
  winnerEl.innerText = winTotal;
};

// 1. SPIN BUTTON SHOULD AUTO GENERATE winArray
// 1.1 This needs to be available in the global scope for each function to read the winArray to perform their duty
// function spin() {
  //   spinButtonEl.addEventListener('click', function(){
    //     const winArray = Array.from({length: 15}, () =>Math.floor(Math.random() * 5) + 1);
    //     return winArray;
    //     console.log(winArray)
    //   }
    // }
    // spin();
    // 2 AFTER SPIN IS CLICKED IT SHOULD BE READ BY renderScreen();
    // 2.1 winArray should be converted to string of emojis (CHARACTERS{} object)
    
    
    // 3. CHECK winArray AFTER SCREEN HAS BEEN UPDATED WITH EMOJI'S BASED ON THEIR ARRAY CELL AND INDEX
    // 3.1
    
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
