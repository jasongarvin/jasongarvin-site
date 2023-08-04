// Get the button
let myButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.hidden = false;
  } else {
    myButton.hidden = true;
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  window.scroll({top: 0, behavior: "smooth"})
}