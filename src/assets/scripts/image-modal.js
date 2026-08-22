'use strict';

const modalElements = document.querySelectorAll('.modal');
const galleryImages = document.querySelectorAll('.modal-image');


modalElements.forEach((element, index) => {
  const sourceImg = galleryImages[index];
  const modalImg = element.querySelector('.modal-content');
  const caption = element.querySelector('.modal-caption');
  const close = element.querySelector('.close');


  close.onclick = function () {
    element.style.display = "none";
  }

  element.addEventListener('click', function (event) {
    if (event.target !== modalImg) {
      element.style.display = 'none';
    }
  });

  sourceImg.onclick = function () {
    element.style.display = "block";
    caption.style.display = "block";
  }
});
