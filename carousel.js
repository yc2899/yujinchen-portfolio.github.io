// ↓ initialize carousel
function nextSlide(slidesSelector, hiddenClassName) {
  let nextNum = $(slidesSelector).index($(slidesSelector + ":not(." + hiddenClassName + ")")) + 2;
  if (nextNum > $(slidesSelector).length) {
    nextNum = 1;
  }
  showSlide(slidesSelector, hiddenClassName, nextNum);
}
function prevSlide(slidesSelector, hiddenClassName) {
  let prevNum = $(slidesSelector).index($(slidesSelector + ":not(." + hiddenClassName + ")"));
  if (prevNum <= 0) {
    prevNum = $(slidesSelector).length;
  }
  showSlide(slidesSelector, hiddenClassName, prevNum);
}
function showSlide(slidesSelector, hiddenClassName, slideNumber) {
  let index = slideNumber - 1;
  let currentSlide = $(slidesSelector).eq(index);

  $(slidesSelector).addClass(hiddenClassName);
  currentSlide.removeClass(hiddenClassName);
}
// ↑ initialize carousel


$("#graphic-prev-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  prevSlide("#graphic-design-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#graphic-next-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  nextSlide("#graphic-design-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event


$("#audio-video-prev-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  prevSlide("#audio-video-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#audio-video-next-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  nextSlide("#audio-video-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event


$("#modeling-rendering-prev-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  prevSlide("#modeling-rendering-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#modeling-rendering-next-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  nextSlide("#modeling-rendering-software > div", "hidden");

  // ↑ action snippets ↑

}); // ← click event
