// Handles header scrolling behavior

let prevScrollPos = window.scrollY;

// Get the header element and it's position
let headerElement = document.querySelector("#main-header");
let headerBottom = headerElement.offsetTop + headerElement.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  /* if we're scrolling up, or we haven't passed the header,
     show the header at the top */
  if (prevScrollPos > currentScrollPos  || currentScrollPos < headerBottom){
      headerElement.style.top = "0";
  }
  else{
      // otherwise we're scrolling down & have passed the header so hide it
      headerElement.style.top = "-9rem";
  }

  prevScrollPos = currentScrollPos;
}
