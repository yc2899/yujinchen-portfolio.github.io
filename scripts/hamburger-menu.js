$("#hamburger-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  if ($("#nav").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#nav").removeClass("hidden");

    $("#hamburger-button").addClass("hamburger-active");

    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#nav").addClass("hidden");

    $("#hamburger-button").removeClass("hamburger-active");

    // ↑ action snippets (class not on element) ↑

  } // ← element has css class


  // ↑ action snippets ↑

}); // ← click event

$(document).ready(function() { // ← page ready event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 600px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav").addClass("hidden");

    $("#hamburger-button").removeClass("hamburger-active");

    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#nav").removeClass("hidden");

    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← page ready event


$(window).on("resize", function() { // ← resize browser window event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 600px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav").addClass("hidden");

    $("#hamburger-button").removeClass("hamburger-active");

    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#nav").removeClass("hidden");

    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← resize browser window event
