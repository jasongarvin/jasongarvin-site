'use strict';

const blogPost = document.getElementById("blog-post");
const readingTime = document.getElementById("post-read-time");
const WORDSPERMINUTE = 250;

setReadingTime();


function setReadingTime() {
  let count = getWordCount();
  let time = Math.ceil(count / WORDSPERMINUTE);

  readingTime.innerText = time + " min read";
}

function getWordCount() {
  // Use regex to match any character (case insensitive) as a global search
  return blogPost.innerText.match(/[\p{Letter}\p{Number}]+/giu).length;
}
