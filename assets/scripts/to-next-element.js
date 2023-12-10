// Manage scroll effects between tagged sections

// TODO: Revise script to dynamically add classes to buttons using js
// Get the button
// let buttonIndexes = document.getElementsByClassName("scroll-to");

// When the user clicks on the button, scroll to the next section
function toNextSection(buttonNumber) {
  let sectionIndexes = document.getElementsByClassName("next-section");
  let nextSection = sectionIndexes[buttonNumber];
  let scrollY = nextSection.offsetTop;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
}
