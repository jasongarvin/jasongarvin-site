// Allows for bookmarking of headings within a blog post

let headings = document.querySelectorAll(".js-heading");
// Construct this URL ourselves to exclude the text fragment
const currentURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

function slugify(text) {
  // Exclude everything except our "safe" characters
  const PUNCTUATION_REGEXP = /[^\p{L}\p{M}\p{N}\p{Pc}\- ]/gu;

  let slug = text.trim().toLowerCase();
  slug = slug.replace(PUNCTUATION_REGEXP, "").replace(/ /g, "-");
  return slug;
}

headings.forEach((heading) => {
  let slug = slugify(heading.innerText);
  heading.setAttribute("id", slug);

  const bookmarkLink = document.createElement("a");
  bookmarkLink.innerText = "#";
  bookmarkLink.setAttribute("href", `${currentURL}#${slug}`);
  heading.append(bookmarkLink);
});
