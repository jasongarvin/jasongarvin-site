'use strict';

const sectionIndexes = document.getElementsByClassName("js-next-section");


function toNextSection(buttonNumber) {
  let nextSection = sectionIndexes[buttonNumber];
  let scrollY = nextSection.offsetTop;

  window.scrollTo({ top: scrollY, behavior: "smooth" });
}
