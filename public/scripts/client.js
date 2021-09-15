/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  let dateTime = timeago.format(1631465538527);

  $(".date-time").text(dateTime);

});
