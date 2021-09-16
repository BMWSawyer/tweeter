/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    for (const tweet of tweets) {
      const $result = createTweetElement(tweet);
      $('.past-tweets').append($result); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }
  
  const createTweetElement = function(tweet) {
    
    let dateTime = timeago.format(tweet['created_at']);
    
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
          <p>${tweet['content'].text}</p>  
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
  
  renderTweets(data);

});
