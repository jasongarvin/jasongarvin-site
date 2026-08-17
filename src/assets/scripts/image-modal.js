'use strict';

const modal = document.getElementById("imageModal");
const img = document.getElementById("tegSite");
const modalImage = document.getElementById("img01");
const captionText = document.getElementById("modalCaption");


img.onclick = function () {
  modal.style.display = "block";
  modalImage.src = this.src;
  captionText.innerHTML = this.alt;
}


// Handle closing the modal using the span element
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

// Handle closing the modal when clicking outside image
modal.addEventListener('click', function (event) {
  if (event.target !== modalImage) {
    modal.style.display = 'none';
  }
});
