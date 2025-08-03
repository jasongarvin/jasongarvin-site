'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const headerElement = document.querySelector("#main-header");

  let prevScrollPos = window.scrollY;
  let headerBottom = headerElement.offsetTop + headerElement.offsetHeight;

  window.onscroll = function () {
    var currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom) {
      headerElement.style.top = "0";
    } else {
      // otherwise we're scrolling down & have passed the header so hide it
      headerElement.style.top = "-9rem";
    }

    prevScrollPos = currentScrollPos;
  };
})
