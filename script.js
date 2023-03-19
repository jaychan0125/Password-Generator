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




function generatePassword() {

//password length prompt:
var pwdLength;
while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {  //if any of these are true(the input is invalid) code will prompt again.
  pwdLength = prompt(`How long would you like your password to be? \nMinimum characters: 8, maximum characters: 128.`);
}
//use a 'WHILE loop'; rather than an 'for loop' BECAUSE the prompt continues to loop UNTIL the conditions are satisfied.
//you DO NOT KNOW how many times the loop will execute before the required criteria are met
//ONCE all loop conditions are met, it will exit the loop
//'for loops' are designed to iterate a fixed number of times.
console.log(`The desired length of your password is: ${pwdLength} characters.`);

//set the characters that can be used(in a string) in their respective variables
var upperCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '`-=~!@#$%^&*()_+<>,./?:;[]{}';

//ensure at least one confirm is true before continuing 
while (true) {
  var selUpper = confirm(`Would you like there to be UPPERCASE characters?`);
  var selLower = confirm(`Would you like there to be lowercase characters?`);
  var selNumbers = confirm(`Would you like to use number5?`);
  var selSpecial = confirm(`Would you like to use $pecial characters?`);
  if (selUpper == false && selLower == false && selNumbers == false && selSpecial == false) {
    alert(`Please choose at least one.`);
    continue; //skip wahtever else happens and go back to the top of the loop
  }
  break; //break out of loop
}

console.log(`Do you want Uppercases: ${selUpper}`);
console.log(`Do you want Lowercases: ${selLower}`);
console.log(`Do you want Numbers: ${selNumbers}`);
console.log(`Do you want Symbols: ${selSpecial}`);

//empty string of chracters I can use in my password
var selectedCharacters = '';
//empty string for newPwd. needs AT LEAST one of each selected character-type
var newPwd = '';

//if prompt is true, add them to the string of usable characters
//if prompt is true, ensure newPwd has at least one character
if (selUpper) {
  selectedCharacters += upperCASE;  //adds characters to the 'selectedCharacters' string of usable characters for final newPwd
  newPwd += upperCASE[(Math.floor(Math.random() * upperCASE.length))];  //adds ONE RANDOM character from selected character-type to final newPwd
}

if (selLower) {
  selectedCharacters += lowerCase;
  newPwd += lowerCase[(Math.floor(Math.random() * lowerCase.length))];
}

if (selNumbers) {
  selectedCharacters += numbers;
  newPwd += numbers[(Math.floor(Math.random() * numbers.length))];
}

if (selSpecial) {
  selectedCharacters += specialChar;
  newPwd += specialChar[(Math.floor(Math.random() * specialChar.length))];
}

console.log(`Here are your usable characters: ${selectedCharacters}`);
console.log(`There are ${selectedCharacters.length} usable characters for your password!`)
console.log(`Your password will contain these characters: ${newPwd}`)

//while loop for unknown pwdLength variable. want it to go on for as many times until the newPwd length is less than the desired pwdLength, it will keep running   
while (newPwd.length < pwdLength) { 
  //picks a random index number from the string:selectedCharacters
  var randomCharacter = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]; //put this inside the while loop so it runs for as many times as stated by condition. when it is outside, it only runs the one time so it keeps adding the same value!
  newPwd += randomCharacter; //adds the randomCharacter to the newPwd
}
console.log(newPwd)
console.log(`Desired password length: ${pwdLength} \nNew password length: ${newPwd.length}`)

return newPwd;  //want the function to have a return value of the newPwd
}


