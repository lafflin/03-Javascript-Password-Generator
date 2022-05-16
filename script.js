// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
	console.log(event);
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

const allCharacters = {
	getCapLtrs: function (useCapLtrs) {
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
	},
	getLowLtrs: function (useLowLtrs) {
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
	},
	getSpChar: function (useSpChar) {
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
	},
	getNumbers: function (useNumbers) {
		const numbers = [];
		if (useNumbers) {
			const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		}
		// i dont really know quite what is happening here at all, basically creating a function called getNumbers that refers back to useNumbers, then says that if useNumbers = true, then return the array of numbers.
		return numbers;
	},
};

const generatePassword = function () {
	const passwordLength = parseInt(
		prompt(
			"Enter a length you would like your password to be (between 8-128 characters)"
		)
	);
	// line below can be deleted
	// prompt for length (between 8-128)
	if (passwordLength >= 8 && passwordLength <= 128) {
		// prompt for chars (upper, lower, special, #)
		const useCapLtrs = confirm("Would you like to use capital letters?");
		const useLowLtrs = confirm("Would you like to use lowercase letters?");
		const useSpChar = confirm("Would you like to use special characters?");
		const useNumbers = confirm("Would you like to use numbers?");
		const capLtrs = allCharacters.getCapLtrs(useCapLtrs);
		const lowLtrs = allCharacters.getLowLtrs(useLowLtrs);
		const spChar = allCharacters.getSpChar(useSpChar);
		// my understanding of what is happening here is that if useNumbers = true, then it accesses the array of  numbers in getNumbers
		const numbers = allCharacters.getNumbers(useNumbers);
		// generated password = ""
		const generatedPassword = "";
		// this shows what how many of the options of characters are wanted by the user, then console.logs it
		const wantedChars = useCapLtrs + useLowLtrs + useSpChar + useNumbers;
		console.log(wantedChars);
		// array to display specifically which of the character types are wanted by the user
		const charsArr = [
			{ useCapLtrs },
			{ useLowLtrs },
			{ useSpChar },
			{ useNumbers },
			// filters out any of these which = false (0) based on user selection
		].filter((item) => Object.values(item)[0]);
		console.log(charsArr);

		// returns nothing if the person selects none of the char options
		if (wantedChars === 0) {
			return "";
		}
		// this currently only generates the pattern of the password (upper, lower, special, number), but not the actual values of these (Ah#2)
		for (let i = 0; i < passwordLength; i += wantedChars) {
			charsArr.forEach((type) => {
				const passGen = Object.keys(type)[0];
				console.log(passGen);
			});

			const randomize = [
				function upperCase() {
					return keys.allCharacters[0][
						Math.floor(Math.random() * keys.allCharacters.getCapLtrs.length)
					];
				},
				function lowerCase() {
					return keys.allCharacters[1][
						Math.floor(Math.random() * keys.allCharacters.getLowLtrs.length)
					];
				},
				function specialChar() {
					return keys.allCharacters[2][
						Math.floor(Math.random() * keys.allCharacters.getSpChar.length)
					];
				},
				function numberGen() {
					return keys.allCharacters[3][
						Math.floor(Math.random() * keys.allCharacters.getNumbers.length)
					];
				},
			];
			let keyGen = randomize[Math.floor(Math.random() * randomize.length)];
			console.log(keyGen);
		}
		// generate password based on parameters set by user
	}
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// problems im having--
// still cannot generate a password
// password length is set to be in groups of 4 (if selecting all 4 options(3 if 3 options selected, etc))
