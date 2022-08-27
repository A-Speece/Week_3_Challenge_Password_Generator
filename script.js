// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(prompt("What is the length of the Password"));
  if (passwordLength >= 8 && passwordLength <= 128) {
    var includeLowercase = confirm("Do you want to include lowercase");
    var includeUppercase = confirm("Do you want to include uppercase");
    var includeNumeric = confirm("Do you want to include numbers");
    var includeSpecialChar = confirm(
      "Do you want to include special characters"
    );

    var lowercase = "abcde";
    var uppercase = "ABCDE";
    var numeric = "12345";
    var specialChar = "!@#$%";
    var selection = "";

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

    console.log(selection);

    var password = "";

    for (let i = 0; i < passwordLength; i++) {
      var randomCharacter = selection.charAt(
        Math.floor(Math.random() * selection.length)
      );
      password = password + randomCharacter;
    }
    return password;
  } else {
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
