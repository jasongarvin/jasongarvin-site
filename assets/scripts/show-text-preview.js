'use strict';

function toggleLongPreview(elementID, btnID) {
  const previewFrame = document.getElementById(elementID);
  const activeButton = document.getElementById(btnID);

  const dots = previewFrame.getElementsByClassName("dots");
  const moreText = previewFrame.getElementsByClassName("read-more");

  if (dots[0].hidden === true) {
    dots[0].hidden = false;
    moreText[0].hidden = true;

    activeButton.innerHTML = "Read more";
  } else {
    dots[0].hidden = true;
    moreText[0].hidden = false;

    activeButton.innerHTML = "Read less";
  }
}
