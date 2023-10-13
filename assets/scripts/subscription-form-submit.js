// A quick script providing submit confirmation

const subscribeForm = document.getElementById('subscription-form');

function resetForm(formName) {
  // TODO confirm this works properly (and fix syntax for new use case)
  formName.classList.remove('done');
}

async function handleSubmit(event) {
  event.preventDefault();

  let formStatus = document.getElementById('form-status');
  let formContent = new FormData(event.target);

  fetch(event.target.action, {
    method: subscribeForm.method,
    body: formContent,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        subscribeForm.reset()
        subscribeForm.classList.add('done');

    } else {
      response.json().then(formContent => {
        if (Object.hasOwn(formContent, 'errors')) {
          formStatus.textContent = formContent['errors'].map(error => error['message']).join(', ')

        } else {
          formStatus.textContent = 'Oops! Please try again.'
        }
      })
    }
    setTimeout(resetForm, 1000, subscribeForm);

  }).catch(error => {
    formStatus.textContent = 'Oops! Please try again.';
  });
}

subscribeForm.addEventListener('submit', handleSubmit)
