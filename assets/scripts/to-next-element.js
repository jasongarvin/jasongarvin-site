// Manage scroll effects between tagged sections

// Get the elements we want to scroll to
const sectionIndexes = document.getElementsByClassName("js-next-section");

// When the user clicks on the button, scroll to the next section
function toNextSection(buttonNumber) {
  let nextSection = sectionIndexes[buttonNumber];
  let scrollY = nextSection.offsetTop;

  window.scrollTo({ top: scrollY, behavior: "smooth" });
}
