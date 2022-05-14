// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
	console.log(event);
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

const getCapLtrs = function (useCapLtrs) {
	const capLtrs = [];

	if (useCapLtrs) {
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
	}
	return capLtrs;
};
const getLowLtrs = function (useLowLtrs) {
	const lowLtrs = [];
	if (useLowLtrs) {
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
	}
	return lowLtrs;
};
const getSpChar = function (useSpChar) {
	const spChar = [];
	if (useSpChar) {
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
		];
	}
	return spChar;
};
const getNumbers = function (useNumbers) {
	const numbers = [];
	if (useNumbers) {
		const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	}
	// i dont really know quite what is happening here at all, basically creating a function called getNumbers that refers back to useNumbers, then says that if useNumbers = true, then return the array of numbers.
	return numbers;
};
const generatePassword = function () {
	const passwordLength = parseInt(
		prompt(
			"Enter a length you would like your password to be (between 8-128 characters)"
		)
	);
	// line below can be deleted
	let password = "test";
	// prompt for length (between 8-128)
	if (passwordLength >= 8 && passwordLength <= 128) {
		// prompt for chars (upper, lower, special, #)
		const useCapLtrs = confirm("Would you like to use capital letters?");
		const useLowLtrs = confirm("Would you like to use lowercase letters?");
		const useSpChar = confirm("Would you like to use special characters?");
		const useNumbers = confirm("Would you like to use numbers?");
		const capLtrs = getCapLtrs(useCapLtrs);
		const lowLtrs = getLowLtrs(useLowLtrs);
		const spChar = getSpChar(useSpChar);
		// my understanding of what is happening here is that if useNumbers = true, then it accesses the array of  numbers in getNumbers
		const numbers = getNumbers(useNumbers);

		// generate password based on parameters set by user
		// do i make a for loop here that basically checks for what the length is, then for what the user requested in the password, then returns a password based on the criteria?
	}
	return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);