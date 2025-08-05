'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const snippets = document.querySelectorAll("code");

  snippets.forEach((snippet) => {
    // Add button only if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      // Add style class and FontAwesome classes to create the clipboard icon
      button.classList.add("copy-to-clipboard", "fa-regular", "fa-clipboard")

      snippet.appendChild(button);

      button.addEventListener("click", async () => {
        await copyCode(snippet, button);
      });
    }
  });


  async function copyCode(snippet, button) {
    await navigator.clipboard.writeText(snippet.innerText);

    // Visual feedback that task is completed
    button.classList.remove("fa-regular", "fa-clipboard");
    button.classList.add("fa-solid", "fa-clipboard-check");

    setTimeout(() => {
      // Return to the original icon
      button.classList.remove("fa-solid", "fa-clipboard-check");
      button.classList.add("fa-regular", "fa-clipboard");
    }, 1000);
  }
})
