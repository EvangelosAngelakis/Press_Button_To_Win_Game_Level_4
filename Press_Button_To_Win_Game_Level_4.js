let password = [1, 3, 5];
let inputSequence = [];
let messages = ["Message 1", "Message 2", "Message 3"];
let messageIndex = 0;

function handleButtonPress(buttonNumber) {
    checkPassword(buttonNumber);
}

function checkPassword(buttonNumber) {
    inputSequence.push(buttonNumber);

    if (inputSequence.length === password.length) {
        if (inputSequence.every((num, index) => num === password[index])) {
            stopExecution = true;
            document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
            document.getElementById('dButton').style.backgroundColor = "cyan";
        } else {
            document.getElementById('dText').innerText = 'Wrong Password. Try again!!!';
        }
        inputSequence = [];
    }
}

function cycleMessage() {
    messageIndex = (messageIndex + 1) % messages.length;
    console.log(messages[messageIndex]);
}


function resetPage() {
    location.reload();
}

