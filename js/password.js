const passwordOutput = document.getElementById("password-output");
const generateButton = document.getElementById("generate-pw-btn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*?-_";
const allCharacters = uppercase + lowercase + numbers + symbols;

function pickRandom(characters) {
    const position = Math.floor(Math.random() * characters.length);
    return characters[position];
}

function generatePassword() {
    let password = pickRandom(uppercase) + pickRandom(lowercase) + pickRandom(numbers) + pickRandom(symbols);

    while (password.length < 16) {
        password = password + pickRandom(allCharacters);
    }

    return password;
}

generateButton.addEventListener("click", function () {
    passwordOutput.value = generatePassword();
});