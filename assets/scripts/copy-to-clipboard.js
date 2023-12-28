// Creates a 'Copy to Clipboard' button in code snippets

let snippets = document.querySelectorAll(".js-code-snippet");

snippets.forEach((snippet) => {
  // Add button only if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");
    button.classList.add("copy-to-clipboard")
    // Add FontAwesome classes for the clipboard icon
    button.classList.add("fa-regular", "fa-clipboard")

    snippet.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(snippet, button);
    });
  }
});

async function copyCode(snippet, button) {
  let code = snippet.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // Visual feedback that task is completed
  button.classList.remove("fa-regular", "fa-clipboard");
  button.classList.add("fa-solid", "fa-clipboard-check");

  setTimeout(() => {
    // Return to the original icon
    button.classList.remove("fa-solid", "fa-clipboard-check");
    button.classList.add("fa-regular", "fa-clipboard");
  }, 1000);
}
