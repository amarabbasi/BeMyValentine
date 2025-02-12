// Select page elements
const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const personalMessage = document.querySelector('.personal-message');

// Function for "Yes" button
function yes() {
  // Hide personal message
  personalMessage.style.display = 'none';
  
  // Update UI elements
  text.style.display = 'block';
  buttons.style.display = 'none';
  question.textContent = "Yey! It's a date then ❤️";
  gif.src = "assets/giphy.gif";
  
  // Start continuous heart flurry
  startHeartFlurry();
}

// No button phrases and GIFs
var phrase = ['why no?', 'u dont want?:(', 'still no?', 'should be yes!', 'yess ;)'];
var gifs = [
  "assets/hug-me-im-sad.gif",
  "assets/goma-peach.gif",
  "assets/cash-app-empty.gif",
  "assets/sad.gif",
  "assets/cry-cute.gif",
  "assets/reaction-sad.gif"
];
var noCount = 0;

// Function for "No" button
function no() {
  if (noCount !== 5) {
    noBtn.style.position = 'absolute';
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

// Function to create an individual heart element
function createHeart() {
  var heart = document.createElement("img");
  heart.src = "assets/heart2.png"; // Ensure this file exists in your assets folder
  heart.alt = "Heart";
  heart.classList.add("heart");

  // Set random size between 10px and 50px
  var size = Math.floor(Math.random() * 40) + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Position heart randomly along the top (starting above the viewport)
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-50px";

  document.body.appendChild(heart);

  // Remove the heart after 5 seconds
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Function to continuously generate hearts for 7 seconds
function startHeartFlurry() {
  let heartInterval = setInterval(() => {
    createHeart();
  }, 150); // Generate a new heart every 150ms

  // Stop generating hearts after 7 seconds
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 7000);
}
