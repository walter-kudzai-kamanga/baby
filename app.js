// Countdown Target and Start Dates
const TARGET_DATE = new Date("August 4, 2026 00:00:00");
const START_DATE = new Date("July 2, 2026 21:00:00"); // Start of the countdown

// For testing / manual verification: Change this to a Date object to simulate a future time
// Example: const MOCK_DATE = new Date("July 20, 2026 12:00:00");
const MOCK_DATE = null;

// Get current date, respecting MOCK_DATE if set
function getCurrentDate() {
  return MOCK_DATE ? new Date(MOCK_DATE) : new Date();
}

// Calculate the active countdown day (1 to 34)
function getCountdownDay() {
  const now = getCurrentDate();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  
  // Calculate difference relative to July 2, 2026
  const baseDate = new Date(2026, 6, 2); // July 2, 2026 (0-indexed month 6)
  const currentDateOnly = new Date(year, month, date);
  
  const diffTime = currentDateOnly - baseDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  const dayNum = diffDays + 1;
  
  if (dayNum < 1) return 1;
  if (dayNum > 34) return 34;
  return dayNum;
}

// State variables
let currentViewedDay = getCountdownDay();
let lockTimerInterval = null;

// DOM Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const progressFill = document.getElementById("progress-fill");
const progressPctText = document.getElementById("progress-pct");

const prevBtn = document.getElementById("prev-msg");
const nextBtn = document.getElementById("next-msg");
const dayIndicator = document.getElementById("day-num-display");
const todayBtn = document.getElementById("today-btn");

const unlockedView = document.getElementById("message-unlocked-view");
const lockedView = document.getElementById("message-locked-view");

const msgDateEl = document.getElementById("msg-date");
const msgTitleEl = document.getElementById("msg-title");
const msgTextEl = document.getElementById("msg-text");
const lockCountdownEl = document.getElementById("lock-countdown");

const heartsContainer = document.getElementById("hearts-container");

// Initialize application
function init() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  renderMessage();
  setupEventListeners();
  
  // Background particles
  initHearts();
  setInterval(createHeart, 1000);
}

// Setup Event Listeners
function setupEventListeners() {
  prevBtn.addEventListener("click", () => {
    if (currentViewedDay > 1) {
      currentViewedDay--;
      renderMessage();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentViewedDay < 34) {
      currentViewedDay++;
      renderMessage();
    }
  });

  todayBtn.addEventListener("click", () => {
    currentViewedDay = getCountdownDay();
    renderMessage();
  });
}

// Format single digit numbers to double digit strings
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the main countdown timer and progress bar
function updateCountdown() {
  const now = getCurrentDate();
  const totalDifference = TARGET_DATE - now;

  if (totalDifference <= 0) {
    // Reunion has happened!
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    progressFill.style.width = "100%";
    progressPctText.textContent = "You are finally together! ❤️";
    
    // Auto unlock the final day
    if (currentViewedDay === 34) {
      renderMessage();
    }
    return;
  }

  // Time calculations
  const days = Math.floor(totalDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalDifference / 1000 / 60) % 60);
  const seconds = Math.floor((totalDifference / 1000) % 60);

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);

  // Progress percentage calculation
  const totalWaitTime = TARGET_DATE - START_DATE;
  const elapsedWaitTime = now - START_DATE;
  let progressPercent = (elapsedWaitTime / totalWaitTime) * 100;
  
  progressPercent = Math.max(0, Math.min(100, progressPercent)); // Clamp between 0 and 100
  progressFill.style.width = `${progressPercent}%`;
  progressPctText.textContent = `${progressPercent.toFixed(4)}% of the wait is complete`;
}

// Render the message for the currently selected day
function renderMessage() {
  const activeDay = getCountdownDay();
  
  // Update indicator text
  dayIndicator.textContent = `Day ${currentViewedDay}`;
  
  // Navigation button states
  prevBtn.disabled = (currentViewedDay === 1);
  nextBtn.disabled = (currentViewedDay === 34);
  
  // Show/hide 'Show Today's Letter' button
  if (currentViewedDay === activeDay) {
    todayBtn.style.opacity = "0.5";
    todayBtn.style.pointerEvents = "none";
  } else {
    todayBtn.style.opacity = "1";
    todayBtn.style.pointerEvents = "auto";
  }
  
  // Clear any active lock timer interval
  if (lockTimerInterval) {
    clearInterval(lockTimerInterval);
    lockTimerInterval = null;
  }

  // Check lock status
  if (currentViewedDay <= activeDay) {
    // Unlocked Card
    lockedView.classList.add("hidden");
    unlockedView.classList.remove("hidden");
    
    // Add micro-animation when swapping contents
    unlockedView.classList.remove("card-enter-anim");
    void unlockedView.offsetWidth; // Trigger reflow to restart animation
    unlockedView.classList.add("card-enter-anim");
    
    const messageData = dailyMessages[currentViewedDay - 1];
    if (messageData) {
      msgDateEl.textContent = messageData.date + ", 2026";
      msgTitleEl.textContent = messageData.title;
      msgTextEl.textContent = messageData.text;
    }
  } else {
    // Locked Card
    unlockedView.classList.add("hidden");
    lockedView.classList.remove("hidden");
    
    lockedView.classList.remove("card-enter-anim");
    void lockedView.offsetWidth; // Trigger reflow to restart animation
    lockedView.classList.add("card-enter-anim");
    
    // Start count down timer to when this future day unlocks
    updateLockTimer();
    lockTimerInterval = setInterval(updateLockTimer, 1000);
  }
}

// Update the countdown for locked letters
function updateLockTimer() {
  const now = getCurrentDate();
  
  // Future day unlocks at the start of that day (00:00:00 local time)
  // July 2 is Day 1. Day X unlocks (X-1) days after July 2.
  const unlockDate = new Date(2026, 6, 2 + (currentViewedDay - 1), 0, 0, 0);
  const diff = unlockDate - now;
  
  if (diff <= 0) {
    // Unlocked in real time!
    renderMessage();
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  let timeStr = "";
  if (days > 0) {
    timeStr += `${days}d `;
  }
  timeStr += `${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`;
  
  lockCountdownEl.textContent = timeStr;
}

// Initialize floating hearts decoration
function initHearts() {
  // Spawn a few initial hearts at random vertical points so they are scattered when loaded
  for (let i = 0; i < 8; i++) {
    createHeart(true);
  }
}

// Create a heart particle
function createHeart(scattered = false) {
  const heart = document.createElement("div");
  heart.className = "heart-particle";
  
  // HTML entity for heart
  heart.innerHTML = `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  
  // Random sizes between 10px and 26px
  const size = Math.random() * 16 + 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  
  // Random horizontal position
  heart.style.left = `${Math.random() * 100}%`;
  
  // Random animation speed (between 8s and 16s)
  const duration = Math.random() * 8 + 8;
  heart.style.animationDuration = `${duration}s`;
  
  // If scattered, start animation halfway up
  if (scattered) {
    const startY = Math.random() * 80; // percent of screen height
    heart.style.transform = `translateY(-${startY}vh)`;
    heart.style.animationDelay = `-${Math.random() * duration}s`;
  }
  
  // Random opacity
  heart.style.opacity = Math.random() * 0.4 + 0.3;
  
  heartsContainer.appendChild(heart);
  
  // Clean up heart element after it floats off-screen
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Start the app on load
window.addEventListener("DOMContentLoaded", init);
