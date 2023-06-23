// Get the DOM elements
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const gradientBtn = document.getElementById('gradientBtn');
const resultDiv = document.getElementById('result');

// Generate gradient background
function generateBackground() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;

  // Set background gradient
  resultDiv.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Add event listener to the button
gradientBtn.addEventListener('click', generateBackground);

// Initial background generation
generateBackground();
