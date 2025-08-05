'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.documentElement;
  const scrollToTopButton = document.getElementById('back-to-top');

  window.addEventListener("scroll", toggleScrollButton);
  scrollToTopButton.addEventListener("click", scrollToTop);


  function toggleScrollButton() {
    let windowYAxis = window.scrollY;

    /* If the scroll value is greater than the window's desired Y axis,
    toggle visibility of the back-to-top button */
    if (windowYAxis > 500) {
      scrollToTopButton.hidden = false;
      scrollToTopButton.style.opacity = 1;
    } else {
      scrollToTopButton.hidden = true;
      scrollToTopButton.style.opacity = 0;
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
})
