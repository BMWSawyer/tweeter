$(document).ready(function() {
  // --- our code goes here ---
  let counter = 140;
  
  $("#tweet-text").parent("form").children(".form-submission").children(".counter").val(counter)

  $("#tweet-text").on('input', function() {
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