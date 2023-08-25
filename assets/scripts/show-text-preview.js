// Used to manage Read more / Read less options on blog posts

function toggleLongPreview(elementID, btnID) {
    const previewFrame = document.getElementById(elementID);
    const activeButton = document.getElementById(btnID);

    let dots = previewFrame.getElementsByClassName("dots");
    let moreText = previewFrame.getElementsByClassName("read-more");

    if (dots[0].hidden === false) {
      dots[0].hidden = true;
      moreText[0].hidden = false;
      activeButton.innerHTML = "Read less";
    } else {
      dots[0].hidden = false;
      moreText[0].hidden = true;
      activeButton.innerHTML = "Read more";

    }
  }
