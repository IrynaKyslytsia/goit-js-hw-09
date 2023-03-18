const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
};

function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(form.delay.value);
  for (let i = 1; i <= form.amount.value; i += 1) {
    createPromise(i, delay)
    .then(({position, delay}) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay = delay + Number(form.step.value);
  }
};
