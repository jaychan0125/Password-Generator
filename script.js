// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// var upperCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var upperCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(upperCASE[5]);
// var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//var numbers = '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'; 
var numbers = '0123456789';
//var specialChar =  
var specialChar = '`-=~!@#$%^&*()_+<>,./?:;[]{}';


var pwdLength = prompt(`How long would you like your password?`);
console.log(pwdLength);

var selUpper = confirm(`Would you like there to be UPPERCASE characters?`);
console.log(selUpper);

var selLower = confirm(`Would you like there to be lowercase characters?`);
console.log(selLower);

var selNumbers = confirm(`Would you like to use numbers?`);
console.log(selNumbers);

var selSpecial = confirm(`Would you like to use special characters?`);
console.log(selSpecial);

//empty string of chracters I can use in my password
var selectedCharacters = ''; //if prompts are true, add them to the array of usable characters

//if true, add to my selectedCharacters string. if false, don't add.
if (selUpper) {
  selectedCharacters += upperCASE;
}
console.log(selectedCharacters);

if (selLower) {
  selectedCharacters += lowerCase;
}
console.log(selectedCharacters);

if (selNumbers) {
  selectedCharacters += numbers;
}
console.log(selectedCharacters);

if (selSpecial) {
  selectedCharacters += specialChar;
}
console.log(selectedCharacters);
console.log(selectedCharacters.length)

//picks a random index number from the string:selectedCharacters
// var randomCharacter = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
// console.log(randomCharacter);

var newPwd = '';
console.log(newPwd)

while (newPwd.length < 10) {
  var randomCharacter = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]; //put this inside the while loop so it runs for that many times. when it is outside, it only runs the one time so it keeps adding the same value
  newPwd += randomCharacter;
}
console.log(newPwd)

