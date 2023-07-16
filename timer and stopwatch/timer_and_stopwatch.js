window.addEventListener("DOMContentLoaded", () => {
    const stopwatchHours = document.getElementById("stopwatch-hours");
    const stopwatchMinutes = document.getElementById("stopwatch-minutes");
    const stopwatchSeconds = document.getElementById("stopwatch-seconds");
  
    let stopwatchInterval;
    let stopwatch = 0;
  
    function startStopwatch() {
      stopwatchInterval = setInterval(() => {
        stopwatch += 1000;
  
        const hours = Math.floor((stopwatch / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((stopwatch / (1000 * 60)) % 60);
        const seconds = Math.floor((stopwatch / 1000) % 60);
  
        stopwatchHours.textContent = String(hours).padStart(2, "0");
        stopwatchMinutes.textContent = String(minutes).padStart(2, "0");
        stopwatchSeconds.textContent = String(seconds).padStart(2, "0");
      }, 1000);
    }
  
    function pauseStopwatch() {
      clearInterval(stopwatchInterval);
    }
  
    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatch = 0;
      stopwatchHours.textContent = "00";
      stopwatchMinutes.textContent = "00";
      stopwatchSeconds.textContent = "00";
    }
  
    document.getElementById("start-stopwatch").addEventListener("click", startStopwatch);
    document.getElementById("pause-stopwatch").addEventListener("click", pauseStopwatch);
    document.getElementById("reset-stopwatch").addEventListener("click", resetStopwatch);
  
    const timerHoursInput = document.getElementById("timer-hours-input");
    const timerMinutesInput = document.getElementById("timer-minutes-input");
    const timerSecondsInput = document.getElementById("timer-seconds-input");
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
  
    let timerInterval;
    let timer = 0;
  
    function startTimer() {
      const hours = parseInt(timerHoursInput.value);
      const minutes = parseInt(timerMinutesInput.value);
      const seconds = parseInt(timerSecondsInput.value);
  
      if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter valid hours, minutes, and seconds.");
        return;
      }
  
      const duration = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  
      timerInterval = setInterval(() => {
        if (timer >= duration) {
          clearInterval(timerInterval);
          timer = 0;
          timerHoursInput.value = "";
          timerMinutesInput.value = "";
          timerSecondsInput.value = "";
        }
  
        const remainingTime = duration - timer;
  
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);
  
        timerHours.textContent = String(hours).padStart(2, "0");
        timerMinutes.textContent = String(minutes).padStart(2, "0");
        timerSeconds.textContent = String(seconds).padStart(2, "0");
  
        timer += 1000;
      }, 1000);
    }
  
    function pauseTimer() {
      clearInterval(timerInterval);
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      timer = 0;
      timerHoursInput.value = "";
      timerMinutesInput.value = "";
      timerSecondsInput.value = "";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  
    document.getElementById("start-timer").addEventListener("click", startTimer);
    document.getElementById("pause-timer").addEventListener("click", pauseTimer);
    document.getElementById("reset-timer").addEventListener("click", resetTimer);
  });
  