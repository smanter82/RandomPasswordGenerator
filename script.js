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

var symIndex = Math.floor(Math.random() * symArray.length);
var numIndex = Math.floor(Math.random() * numArray.length);
var upLetIndex = Math.floor(Math.random() * upLetterArray.length);
var lowLetIndex = Math.floor(Math.random() * lowLetterArray.length);

//console.log(symArray[symIndex])
//console.log(numArray[numIndex])
//console.log(upLetterArray[upLetIndex])
//console.log(lowLetterArray[lowLetIndex])

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Work in progress
// function generatePassword() {
//   //for loop here to set limits (8 word password = iterate 8 times)
//   var findPassword = prompt("How many characters would you like your password to be?  (Min of 8)");
//   var convertString = parseInt(findPassword);
//   var confirmSpecial = ("Click ok to include special characters in password.");
//   var confirmNumbers = ("Click ok to include numbers in password.");
//   var confirmUppercase = ("Click ok to include Uppercase letters in password.");
//   var confirmUppercase = ("Click ok to include Lowercase letters in password.");
  
//   if (convertString >= 8) {
//     return("Good job")
//   }
//   if (confirmSpecial === true) {
//     return(symArray[symIndex])
//     //from my array of numbers, randomize and then add a single element to an array
//     alert(confirmNumbers);
//   }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
