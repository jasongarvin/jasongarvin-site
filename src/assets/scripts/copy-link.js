'use strict';

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
    console.error('Failed to copy: ', err);
  }
}
