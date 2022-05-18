// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
	console.log(event);
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

const allCapLtrs = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

const allLowLtrs = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
const allSpChar = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	" &",
	"*",
	"(",
	" )",
	"{",
	"}",
	"[",
	"]",
	"?",
	".",
];

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function generatePassword() {
	let charSet = [];
	let password = "";
	let passwordLength;
	// prompt for length (between 8-128)
	passwordLength = prompt(
		"Enter the length of your password (between 8-128 characters)"
	);
	if (passwordLength >= 8 && passwordLength <= 128) {
	} else {
		alert("The password has to be between 8 and 128 characters");
		return generatePassword();
	}

	// if (passwordLength >= 8 && passwordLength <= 128) {
	if (confirm("Use capital letters?")) {
		charSet = charSet.concat(allCapLtrs);
	}
	if (confirm("Use lowercase letters?")) {
		charSet = charSet.concat(allLowLtrs);
	}
	if (confirm("Use special characters?")) {
		charSet = charSet.concat(allSpChar);
	}
	if (confirm("Use numbers?")) {
		charSet = charSet.concat(allNumbers);
	}
	console.log(charSet);
	for (let i = 0; i < passwordLength; i++) {
		password += charSet[Math.floor(Math.random() * charSet.passwordLength)];
	}
	console.log(password);
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
