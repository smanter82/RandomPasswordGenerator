//set arrays for password characters
let symArray = [
  '!',
  ',',
  '#',
  '$',
  '%',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '=',
  '?',
  '@',
  '[',
  "\\",
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~'];
let numArray = [0,1,2,3,4,5,6,7,8,9];
let upLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowLetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//set function to call prompts for user to set terms of password
function generatePassword() {
  var findPassword = prompt("How many characters would you like your password to be?  (Min of 8)");
  var convertString = parseInt(findPassword);
  let passwordArray = []
  let password = ""

  if (findPassword === null || findPassword === "" ||convertString < 8 || convertString > 128) {
    alert("Error:  Passwords must be between 8 and 128 characters.")
  //reset values if user has caused error by choosing value outside of expected parameters.
    findPassword = '';
    convertString = 0;
    passwordArray = [];
    password = "";
  } else {
    var confirmSpecial = confirm("Click ok to include special characters in password.");
    var confirmNumbers = confirm("Click ok to include numbers in password.");
    var confirmUppercase = confirm("Click ok to include Uppercase letters in password.");
    var confirmLowercase = confirm("Click ok to include Lowercase letters in password.");
  }
  if (confirmSpecial) {
      passwordArray=passwordArray.concat(symArray);
  }  
  if (confirmNumbers) {
    passwordArray=passwordArray.concat(numArray);
  } 
  if (confirmUppercase) {
    passwordArray=passwordArray.concat(upLetterArray);
  }
  if (confirmLowercase) {
    passwordArray=passwordArray.concat(lowLetterArray);
    console.log(passwordArray)
  }
  if (!confirmSpecial && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
    alert("Error:  Must select at least one character type.  Try again.")
  //reset values if user causes error by not selecting at least one character type
    findPassword = '';
    convertString = 0;
    passwordArray = [];
    password = "";
  }

//Set randomization to select unique password
for (var i = 0; i<convertString; i++) {
  var passwordIndex = Math.floor(Math.random() * (passwordArray.length-1));
  password += passwordArray[passwordIndex]
} 

return password;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
