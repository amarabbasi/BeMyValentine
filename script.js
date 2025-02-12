// Select page elements
const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const body = document.querySelector('body');
const personalMessage = document.querySelector('.personal-message'); // Select personal message

// Function for "Yes" button
function yes() {
    // Hide personal message
    personalMessage.style.display = 'none';

    // Update UI elements
    text.style.display = 'block';
    buttons.style.display = 'none';
    question.textContent = "Yey! It's a date then ❤️";
    gif.src = "assets/giphy.gif";

    // Create falling hearts with a sprinkling effect
    createHearts(50);
}

// No button phrases and GIFs
var phrase = ['why no?', 'u dont want?:(', 'still no?', 'should be yes!', 'yess ;)'];
var gifs = ["assets/hug-me-im-sad.gif", "assets/goma-peach.gif", "assets/cash-app-empty.gif", "assets/sad.gif", "assets/cry-cute.gif", "assets/reaction-sad.gif"];
var noCount = 0;

// Function for "No" button
function no() {
    if (noCount !== 5) {
        noBtn.style.position  = 'absolute';
        var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        noBtn.textContent = phrase[noCount];
        gif.src = gifs[noCount];
        noCount++;
    } else {
        yes(); // Forces "Yes" after 5 "No"s
    }

    // Hide personal message after any interaction
    personalMessage.style.display = 'none';
}

// Function to create falling hearts with random movement
function createHearts(numbers) {
    for (var i = 0; i < numbers; i++) {
        var heart = document.createElement("img");

        heart.src = "assets/heart2.png"; // Ensure file exists in "assets/"
        heart.alt = "Heart";
        heart.classList.add("heart");

        // Set random size
        var size = Math.floor(Math.random() * 31) + 20; // Between 20px and 50px
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        // Position hearts randomly at the top
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-50px"; // Start from above screen

        document.body.appendChild(heart);

        // Remove hearts after falling
        setTimeout(() => {
            heart.remove();
        }, 4000); // 4 seconds duration
    }
}
