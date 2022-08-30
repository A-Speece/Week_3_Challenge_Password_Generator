// Assignment Code
var generateBtn = document.querySelector("#generate");
//created the function generatePassword to create the random password when the button is clicked
function generatePassword() {
  var passwordLength = parseInt(prompt("What is the length of the Password"));

  //If statemet to let to ask the user what they want as the criteria as the password.
  //If the password length is between 8 and 128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    var includeLowercase = confirm("Do you want to include lowercase");
    var includeUppercase = confirm("Do you want to include uppercase");
    var includeNumeric = confirm("Do you want to include numbers");
    var includeSpecialChar = confirm(
      "Do you want to include special characters"
    );

    //Declare the variables for the random generated password
    var lowercase = "abcde";
    var uppercase = "ABCDE";
    var numeric = "12345";
    var specialChar = "!@#$%";
    var selection = "";

    // If statements based on the users selection. If the user selections are true add the selected variable
    //to the selection variable
    if (includeLowercase == true) {
      selection = selection + lowercase;
    }
    if (includeUppercase == true) {
      selection = selection + uppercase;
    }
    if (includeNumeric == true) {
      selection = selection + numeric;
    }
    if (includeSpecialChar == true) {
      selection = selection + specialChar;
    }

    var password = "";

    //For loop to get a random character from the selection variable and the create a new variable called
    //randomChartacter. that randomcharacter variable is then added to the password variable and is returned to the user.
    for (let i = 0; i < passwordLength; i++) {
      var randomCharacter = selection.charAt(
        Math.floor(Math.random() * selection.length)
      );
      password = password + randomCharacter;
    }
    return password;
  } else {
    // alert the user if they have chosen an invalid length for the password selection.
    alert("Length must be between 8 and 128");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
