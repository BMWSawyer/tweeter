$(document).ready(function() {
  // --- our code goes here ---
  
  $("#tweet-text").parent("form").children(".form-submission").children(".counter").val(140);
  
  $("#tweet-text").on('input', function() {
    let counter = 140;

    const text = $(this).val();
    
    counter -= text.length;

    let charCounter = $(this).parent("form").children(".form-submission").children(".counter").val(counter);

    if (counter < 0) {
      $(this).parent("form").children(".form-submission").children(".counter").addClass("non-valid");
    } else {
      $(this).parent("form").children(".form-submission").children(".counter").removeClass("non-valid");
    }

    return charCounter;
  });
});