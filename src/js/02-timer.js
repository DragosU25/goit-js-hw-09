import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    const now = date.getTime();

    if (now > selectedDates[0]) {
      startButton.disabled = true;
      startButton.style.cursor = 'default';
      startButton.style.color = 'red';
      Notiflix.Notify.failure('Please chose a date in the future');
    } else {
      startButton.disabled = false;
      startButton.style.cursor = 'pointer';
      startButton.style.color = 'yellow';
    }
  },
};

flatpickr(dateTimePicker, options);
let countdownInterval;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  startButton.style.cursor = 'default';
  startButton.style.color = 'red';
  const selectedDate = new Date(dateTimePicker.value).getTime();
  const now = Date.now();
  countdownInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeDifference = selectedDate - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success('Countdown finished!');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    updateTimer(days, hours, minutes, seconds);
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(days, hours, minutes, seconds) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}
