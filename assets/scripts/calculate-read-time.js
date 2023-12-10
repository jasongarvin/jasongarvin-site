// Calculates the expected read time of a blog post

const post = document.getElementById("blog-post");
const readingTime = document.getElementById("post-read-time");
const avgWordsPerMin = 250;

setReadingTime();

function setReadingTime() {
  let count = getWordCount();
  let time = Math.ceil(count / avgWordsPerMin);

  readingTime.innerText = time + " min read";
}

function getWordCount() {
  // Use regex to match any character (case insensitive) as a global search
  return post.innerText.match(/[\p{Letter}\p{Number}]+/giu).length;
}
