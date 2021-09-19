/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.past-tweets').empty();

    for (const tweet of tweets) {
      const $result = createTweetElement(tweet);
      $('.past-tweets').prepend($result); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }
  
  const createTweetElement = function(tweet) {
    
    let dateTime = timeago.format(tweet['created_at']);
    const textFromUser = tweet['content'].text;

    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const safeHTML = `<p>${escape(textFromUser)}</p>`;

    const $tweet = $(`
      <article>
        <header>
          <div class="user">
            <div class="person">
              <img class="avatar" src="${tweet['user'].avatars}">
              <p class="name">${tweet['user'].name}</p>
            </div>
            <p class="handle">${tweet['user'].handle}</p>
          </div>
          ${safeHTML} 
        </header>
        <footer>
          <span class="date-time" style="margin-left: 10px;">${dateTime}</span>
          <div class="icons">
            <i class="fas fa-flag icon"></i>
            <i class="fas fa-retweet icon"></i>
            <i class="fas fa-heart icon"></i>
          </div>
        </footer>
      </article>
    `);
    
    return $tweet;
  };
  

  $('.form').on('submit', function( event ) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    
    if ($('#tweet-text').val() === "" || $('#tweet-text').val() === null) {
      alert("You canot post a blank tweet. We want to hear what you're thinking!");
    } else if ($('#tweet-text').val().length > 140) {
      alert("Your tweet has too many characters. Tweet again with less than 140 characters!");
    } else {
    $.post('/tweets', serializedData)
      .then((response) => {
        loadTweets();
        $('#tweet-text').val("");
        $('.counter').val(140);
      })
      .then((error) => {
        console.log(error);
      })
    }
  });

  const loadTweets = () => { $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: (tweets) => {
      renderTweets(tweets);
    },
    error: (error) => {
      console.log(error)
    }
  })};

  loadTweets();

});
