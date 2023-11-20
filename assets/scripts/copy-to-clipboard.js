// Creates a 'Copy to Clipboard' button in code snippets

const copyButtonLabel = "Copy Code";

let snippets = document.querySelectorAll(".code-snippet");

snippets.forEach((snippet) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.classList.add("copy-to-clipboard")

        button.innerText = copyButtonLabel;
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

    // visual feedback that task is completed
    button.innerText = "Copied!";

    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 1000);
  }
