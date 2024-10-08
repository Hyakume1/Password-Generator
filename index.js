// html components
const CapitalCase = document.getElementById("CapitalCase");
const Numbers = document.getElementById("Numbers");
const Symbols = document.getElementById("Symbols");
const LowerCase = document.getElementById("LowerCase");
const sizeOfPass = document.getElementById("passlength");
const password = document.getElementById("password");
// these are the different types of characters for the password
const capitalLettersArray = [];
const numsArray = [];
const americalSymbolsArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  "/",
  ";",
  "'",
  "<",
  ">",
  "?",
  "/",
  ".",
  ",",
  "`",
  "~",
];

const lowerLettersArray = [];

// populate the arrays
for (let i = 97; i <= 122; i++) {
  lowerLettersArray.push(String.fromCharCode(i));
}

for (let i = 65; i <= 90; i++) {
  capitalLettersArray.push(String.fromCharCode(i));
}

for (let i = 0; i <= 9; i++) {
  numsArray.push(i);
}

// --------------------------------------------------------------------------------------------------------------------------
// functions for the button and to create the password
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let passwordGenerated = [];

function generatePass() {
  let checkboxCheckedAmount = 0;
  let keysForPass = [];
  passwordGenerated = [];

  if (LowerCase.checked) {
    keysForPass.push(...lowerLettersArray);
    checkboxCheckedAmount++;
    passwordGenerated.push(
      lowerLettersArray[Math.floor(Math.random() * lowerLettersArray.length)]
    );
  }
  if (CapitalCase.checked) {
    keysForPass.push(...capitalLettersArray);
    checkboxCheckedAmount++;
    passwordGenerated.push(
      capitalLettersArray[
        Math.floor(Math.random() * capitalLettersArray.length)
      ]
    );
  }
  if (Numbers.checked) {
    keysForPass.push(...numsArray);
    checkboxCheckedAmount++;
    passwordGenerated.push(
      numsArray[Math.floor(Math.random() * numsArray.length)]
    );
  }
  if (Symbols.checked) {
    keysForPass.push(...americalSymbolsArray);
    checkboxCheckedAmount++;
    passwordGenerated.push(
      americalSymbolsArray[
        Math.floor(Math.random() * americalSymbolsArray.length)
      ]
    );
  }

  if (checkboxCheckedAmount == 0) {
    alert("you must select one!");
    return;
  }
  if (checkboxCheckedAmount > sizeOfPass.value) {
    sizeOfPass.value = checkboxCheckedAmount;
  }

  for (let i = checkboxCheckedAmount; i < sizeOfPass.value; i++) {
    passwordGenerated.push(
      keysForPass[Math.floor(Math.random() * keysForPass.length)]
    );
  }

  passwordGenerated = shuffleArray(passwordGenerated);

  password.textContent = passwordGenerated.join("");
}

// this function is to copy the password to the clipboard
function copyToClipboard() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(passwordGenerated.join(""));

  // Alert the copied text
  alert("pass Copied!");
}
