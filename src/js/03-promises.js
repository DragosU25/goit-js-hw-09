import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delayInput = parseInt(form.elements['delay'].value);
  const amountInput = parseInt(form.elements['amount'].value);
  const stepInput = parseInt(form.elements['step'].value);

  for (let i = 0; i < amountInput; i++) {
    const promiseNumber = i + 1;
    const promiseDelay = delayInput + i * stepInput;
    createPromise(promiseNumber, promiseDelay);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(result => {
      Notiflix.Notify.success(result);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    });
}
