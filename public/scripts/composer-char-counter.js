$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").parent("form").children(".form-submission").children(".counter").val(140)

  $("#tweet-text").on('input', function() {
    const text = $(this).val();
    let counter = 140;

    counter -= text.length;

    let charCounter = $(this).parent("form").children(".form-submission").children(".counter").val(counter);

    if (counter <= 0) {
      $(this).parent("form").children(".form-submission").children(".counter").addClass("non-valid");
    } else if (counter > 0) {
      $(this).parent("form").children(".form-submission").children(".counter").removeClass("non-valid");
    }

    return charCounter;
    
  });

});