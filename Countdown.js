const countdownDisplay = document.getElementById('countdown');
const cancelButton = document.getElementById('cancel');
const resetButton = document.getElementById('reset');
let countdownInterval;
let targetTime = localStorage.getItem('targetTime');

function startCountdown() {
  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Countdown Complete!';
    } else {
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      if (days > 99) days = 99;
      if (hours > 23) hours = 23;
      if (minutes > 59) minutes = 59;
      if (seconds > 59) seconds = 59;

      countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

function cancelCountdown() {
  clearInterval(countdownInterval);
  countdownDisplay.textContent = 'mission abort!';
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownDisplay.textContent = '';
  localStorage.removeItem('targetTime'); // Remove stored target time
  window.location.href = 'index.html'; // Redirect back to the initial page
}

startCountdown(); // Start the countdown when the page loads
cancelButton.addEventListener('click', cancelCountdown);
resetButton.addEventListener('click', resetCountdown);
