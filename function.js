const startButton = document.getElementById('start');
const datetimeInput = document.getElementById('datetime');

function startCountdown() {
  const targetTime = new Date(datetimeInput.value).getTime();
  localStorage.setItem('targetTime', targetTime); // Store target time in localStorage
  window.location.href = 'countdown.html'; // Redirect to countdown page
}

startButton.addEventListener('click', startCountdown);
