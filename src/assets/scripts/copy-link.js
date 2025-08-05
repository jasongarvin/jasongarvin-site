// TODO: add minor animation to confirm button press

'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copy-link');

  if (navigator.clipboard) {
    copyButton.addEventListener("click", async () => {
      await copyPageUrl();
    })
  }


  async function copyPageUrl () {
    try {
      await navigator.clipboard.writeText(location.href);
      console.log('Page URL copied to clipboard');
    } catch(err) {
      console.error('FAILED TO COPY: ', err);
    }
  }
})
