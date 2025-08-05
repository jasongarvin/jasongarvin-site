'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector("#main-header");

  let previousScrollPos = window.scrollY;
  let bottomOfHeader = header.offsetTop + header.offsetHeight;

  window.onscroll = function () {
    var currentScrollPos = window.scrollY;

    if (previousScrollPos > currentScrollPos || currentScrollPos < bottomOfHeader) {
      header.style.top = "0";
    } else {
      // otherwise we're scrolling down and have passed the header, so hide it
      header.style.top = "-9rem";
    }

    previousScrollPos = currentScrollPos;
  };
})
