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
	"&",
	"*",
	"(",
	")",
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
	// will return user back to entering the length if it is shorter or longer than required
	if (passwordLength >= 8 && passwordLength <= 128) {
	} else {
		alert("The password has to be between 8 and 128 characters");
		return generatePassword();
	}
	// asks if user would like to use capital letters, and if so it will concat them into the charSet array
	if (confirm("Use capital letters?")) {
		charSet = charSet.concat(allCapLtrs);
	}
	// asks if user would like to use lowercase letters, and if so it will concat them into the charSet array
	if (confirm("Use lowercase letters?")) {
		charSet = charSet.concat(allLowLtrs);
	}
	// asks if user would like to use special characters, and if so it will concat them into the charSet array
	if (confirm("Use special characters?")) {
		charSet = charSet.concat(allSpChar);
	}
	// asks if user would like to use numbers, and if so it will concat them into the charSet array
	if (confirm("Use numbers?")) {
		charSet = charSet.concat(allNumbers);
	}
	// logs what is in the charSet array after all the concat's
	console.log(charSet);
	for (let i = 0; i < passwordLength; i++) {
		password += charSet[Math.floor(Math.random() * charSet.length)];
	}
	console.log(password);
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
