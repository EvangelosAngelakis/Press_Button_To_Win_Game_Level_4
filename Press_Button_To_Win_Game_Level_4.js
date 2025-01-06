const messages = [
    "This will be tricky. Can you find the way?",
    "Oops, this is wrong! Try again...and again!",
    "The 'Third' time is the lucky one",
    "Nope, that's not it. Keep trying!",
    "OMG,I am starting to lose faith here.",
    "If you want to win, tap your way in.",
    "Almost there, but not quite there yet.",
    "Better luck next time! Keep going.",
    "Not this way either. You can do it!",
    "Hmm, still not the correct way to do it.",
    "Keep pressing, you'll get it eventually!",
    "The tap is the key, find it and win",
    "Wrong again! Don't give up! Keep trying.",
    "You're getting closer, but this isn't it.",
    "Nope, this is not the one. Keep going!",
    "How many taps, you think you need?",
    "Not quite. Keep pressing those buttons!",
    "Nope, that's not it. Don't lose hope!",
    "Incorrect again. Keep pressing buttons!",
    "Oh come on, this is getting boring now.",
    "Almost there, I promise. Cross my heart!",
    "Just a little bit more. You can do it!",
    "Tap, tap, tap, before you run out of luck",
];

let currentIndex = 0;
let stopExecution = false;
let sequence = [];
const secretCode = ['button1', 'button2', 'button3']; 

function cycleMessage() {
    if (stopExecution) return;
    const dText = document.getElementById('dText');
    dText.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById('dButton').style.backgroundColor = "bisque";
    document.getElementById('dText').style.color = "black";
}

function checkSequence(buttonId) {
    sequence.push(buttonId);
    if (sequence.length > secretCode.length) {
        sequence.shift(); 
    }
    if (sequence.join('') === secretCode.join('')) {
        cycleMessage();
    }
}

document.getElementById('button1').addEventListener('click', function() {
    checkSequence('button1');
});

document.getElementById('button2').addEventListener('click', function() {
    checkSequence('button2');
});

document.getElementById('button3').addEventListener('click', function(event) {
    checkSequence('button3');
    if (event.detail === 1) {
        stopExecution = true;
        document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
        document.getElementById('dButton').style.backgroundColor = "cyan";
    }
});


function resetPage() {
    location.reload();
}