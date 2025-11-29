$("#europa-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#europa-overlay").removeClass("hidden");
  // ↑ action snippets ↑

}); // ← click event


$("#stove-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#stove-overlay").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event


$("#automata-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#automata-overlay").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event


$("#light-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#light-overlay").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event


$(".project-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("body").addClass("noscroll");

  // ↑ action snippets ↑

}); // ← click event


$(".modal-close").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $(".modal-overlay").addClass("hidden");
  $("body").removeClass("noscroll");

  // ↑ action snippets ↑

}); // ← click event
