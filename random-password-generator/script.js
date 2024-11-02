const passwordContainer = document.getElementById("password");
const button = document.getElementById("button");
const copy = document.getElementById("copy");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*";
const allChar = upperCase + lowerCase + specialCharacters + numbers;

const generatePassword = () => {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordContainer.value = password;
};

// Deprecated
// function copyPassword() {
//   passwordContainer.select();
//   document.execCommand("copy");
// }

function copyPassword() {
  navigator.clipboard
    .writeText(passwordContainer.value)
    .then(() => {
      alert("Password copied to clipboard");
      console.log(passwordContainer.value);
    })
    .catch((err) => {
      console.log(err);
    });
}
button.addEventListener("click", generatePassword);
copy.addEventListener("click", copyPassword);
