let timer;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 0;  // To track lap number


const display = document.getElementById('display');
const laps = document.getElementById('laps');



function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}



document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedTime += 10;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
});



document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});



document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = '00:00:000';
  laps.innerHTML = '';  // Clear lap list
  lapCount = 0;  // Reset lap count
});



document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    lapCount++;  // Increment lap count
    
    const lapTime = document.createElement('li');
    lapTime.textContent = `${lapCount}: ${formatTime(elapsedTime)}`;
    
    
    laps.appendChild(lapTime);
  }


  function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; // Return the random RGB color
  }


  // Function to change the shadow color
  function changeShadowColor() {
    const stopwatch = document.querySelector('.stopwatch');
    const randomColor = getRandomColor(); // Get a random color
    stopwatch.style.filter = `drop-shadow(8px 8px 2px ${randomColor})`; // Apply random color to shadow
  }



  // Call the function to change shadow color when the page loads
  changeShadowColor();


  g
  // Optional: Change shadow color every 2 seconds for fun
  setInterval(changeShadowColor, 1000);
});
