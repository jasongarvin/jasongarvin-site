'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-me');

  contactForm.addEventListener('submit', handleSubmit)


  function resetButton(buttonId, newContent) {
    buttonId.textContent = newContent;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let submitButton = document.getElementById('contact-submit');
    let formContent = new FormData(event.target);

    fetch(event.target.action, {
      method: contactForm.method,
      body: formContent,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        submitButton.textContent = 'Thanks for your submission!';
        contactForm.reset()
        setTimeout(resetButton, 1000, submitButton, 'Submit');
      } else {
        response.json().then(formContent => {
          if (Object.hasOwn(formContent, 'errors')) {
            submitButton.textContent = formContent['errors'].map(error => error['message']).join(', ')
          } else {
            submitButton.textContent = 'Oops! There was a problem submitting your form'
          }
        })
      }
    }).catch(error => {
      submitButton.textContent = 'Oops! There was a problem submitting your form';
      console.log(error);
    });
  }
})
