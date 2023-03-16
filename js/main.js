// WILL DESIGN GAME SO IT CAN BE TRIMMED DOWN TO 3 X 3 CELLS IF NEEDED

/*----- constants -----*/

// WILL CREATE OBJECT WITH EACH ITEM BELOW WITH NAME, INDEX, VALUE, ETC..
// IF WE ADD 5 IN A ROW ADD A NEW CHARACTER/CARD
// EMOJIS
CHARACTERS = {
  '1': 'J', // JACK / value = 10
  '2': 'Q', // QUEEN / value = 10
  '3': 'K', // KING / value = 10
  '4': 'A', // ACE / value = 20
  '5': 'X', // KOMODO DRAGON / value = 50 🐉
  // JOKER, CARD SUITS
}


/*----- state variables -----*/
// USE ID'S TO TARGET SPECIFIC CELLS
let cellArray = ['','','','','','','','','','','','','','','',];

// REPRESENTS THE 15 CELLS THAT HOLD VALUES TO DETERMINE WINNER
// **MAY CHANGE NAME
let slotCells;

// CURRENT BALANCE THAT REACTS TO ADDING, 
// HAVE POPUP TO CHOOSE THE AMOUNT TO START IN BANK
let balance;

// BALANCE THAT IS WON AFTER EVERY TIME SPIN BUTTON IS PRESSED
let winBalance;

// WINNING COMBONATIONS
// **TBD ON POSSIBLE MULTI-WIN COMBOS / USER SELECTED WIN COMBO AMOUNTS
// USING AN ARRAY OF EMPTY STRINGS TO FIND THE WINNING COMOBS USING LOOP
const winningCombos = [];



/*----- cached elements  -----*/



/*----- event listeners -----*/


// NAME OF THE SLOT MACHINE CELLS
const screenEls = document.querySelectorAll('cells');
const spinButton = document.getElementById('spin-button');
const betAmountButton = document.getElementById('bet-amount');
const addMoney = document.getElementById('add-money');


/*----- functions -----*/

initialize();

function initalize() {
  gameBoard;
  getBalance;
  renderMessage();
  betLogic();
  checkWinner();
  renderScreen();
  // USED FOR FREE SPINS IF POSSIBLE
  // countSpins();
};

// USED TO TELL PLAYER THEY WON ANY AMOUNT OF MONEY
// REPORT THE WINNINGS BELOW "WIN TOTAL" AREA
function renderMessage() {
  // START UP ANIMATION
  function renderStartMessage() {}
};

// TBD BUT I THOUGHT IT MAY BE NEEDED FOR ADDED FEATURES
function betLogic() {
  
};

// CHECK THE RESULTS THAT END UP IN screenEls
// COMPARE AGAINST THE cellArray and winningCombos FOR WINNERS
// LOOK UP TO HIGHLIGHT WINNERS
function checkWinner() {
  
};

// POSSIBLY USED TO RENDER IMAGES THAT HAVE SPECIAL EFFECTS
// POSSIBLY USED TO RESET THE screen
function renderScreen() {
  
};

//FUNCTIONS MAY NOT USE
function countSpins() {};




// ICEBOX!!
// function screenAnimation(){};

// TRACKS THE TOTAL AMOUNT BET PER BUTTON CLICK
// **MAY REMOVE
// let winAmount;

// IF POSSIBLE IDEAS
// let freeSpins;
// let jackpotAnimation;
// BUTTONS
// **MAY NOT HAVE RIGHT AWAY
// let increaseBet;
// let decreaseBet;

// IF POSSIBLE BUT UNLIKELY
// let stopButton;

// function addMoney () {};