const messages = [
    "There are 3 numbers to find, can you do it?",
    "Almost there, but not quite there yet.",
    "These numbers are 'odd'. Can you guess them?",
    "Better luck next time! Keep going.",
    "Not this password either. You can do it!",
    "Hmm, still not the correct one unfortunately.",
    "It would be best to start from the start!!!",
    "Keep pressing, you'll get it eventually!",
    "Wrong again! Don't give up! Keep trying.",
    "The password is as easy as 1,2,3 but 'odd'!",
    "Not quite. Keep pressing those buttons!",
    "Nope, that's not it. Don't lose hope!",
    "Start from number 1 and press the odd ones",
    "Almost there, I promise. Cross my heart!",
    "Start from the 'start' and then press '3'.",
    "You're getting closer, but this isn't it.",
    "There is also a '5' in the password, somewhere.",
];

let password = [1, 3, 5];
let inputSequence = [];
let currentIndex = 0;
let stopExecution = false;

function handleButtonPress(buttonNumber) {
    checkPassword(buttonNumber);
    if (!stopExecution) {
        displayPressedButtons();
    }
}

function checkPassword(buttonNumber) {
    inputSequence.push(buttonNumber);

    if (inputSequence.length === password.length) {
        if (inputSequence.every((num, index) => num === password[index])) {
            stopExecution = true;
            document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
            document.getElementById('dText').style.backgroundColor = "cyan";
            displayPressedButtons();
            return;
        } else {
            document.getElementById('dText').innerText = 'Incorrect Password. Try again!';
        }
        inputSequence = [];
        resetPressedButtons();
    }
}

function displayPressedButtons() {
    const pressedButtonsElement = document.getElementById('dText2');
    pressedButtonsElement.textContent = `Password: ${inputSequence.join(', ')}`;
}

function resetPressedButtons() {
    const pressedButtonsElement = document.getElementById('dText2');
    pressedButtonsElement.textContent = '';
    inputSequence = []; 
}

function cycleMessage() {
    if (stopExecution) return;
    const dText = document.getElementById('dText');
    dText.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById('dText').style.backgroundColor = "bisque";
    document.getElementById('dText').style.color = "black";
}

function resetPage() {
    location.reload();
}

