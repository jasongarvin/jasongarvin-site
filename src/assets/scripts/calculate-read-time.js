'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const WORDSPERMINUTE = 250;
  const blogPost = document.getElementById("blog-post");
  const readingTime = document.getElementById("post-read-time");

  readingTime.innerText = setReadingTime();


  function setReadingTime() {
    let count = getWordCount();
    let time = Math.ceil(count / WORDSPERMINUTE);

    return time + " min read";
  }

  function getWordCount() {
    // Use regex to match any character (case insensitive) as a global search
    return blogPost.innerText.match(/[\p{Letter}\p{Number}]+/giu).length;
  }
})
