const randomNumber = generateRandomNumber();

function submitGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value;

    if (!isValidGuess(guess)) {
        alert("Please enter a valid 3-digit number.");
        return;
    }

   
    const result = compareNumbers(guess, randomNumber);

    document.getElementById("result").innerHTML = `Your guess: ${guess}<br>Random number: ${randomNumber}<br>${result}`;

    if (result.includes("Matching digits: 3")) {
        document.getElementById("result").innerHTML += "<br>Congratulations! You guessed it!";
    }
}

function isValidGuess(guess) {
    return /^\d{3}$/.test(guess);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function compareNumbers(guess, randomNumber) {
    let matchingDigits = 0;
    let samePosition = 0;

    for (let i = 0; i < 3; i++) {
        if (guess[i] === randomNumber.toString()[i]) {
            samePosition++;
        } else if (randomNumber.toString().includes(guess[i])) {
            matchingDigits++;
        }
    }

    return `Matching digits: ${matchingDigits}, Same position: ${samePosition}`;
}
