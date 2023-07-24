// define tweet list element
var tweetList = document.querySelector(".tweet-list");

// add event listener to tweet button
document.querySelector("#tweet-button").addEventListener("click", function() {
  // get the tweet input value
  var tweetInput = document.querySelector("#tweet-input").value;
  
  // create a new tweet element and append to tweet list
  var tweet = document.createElement("div");
  tweet.classList.add("tweet");
  tweet.innerHTML = "<p>" + tweetInput + "</p><span class='timestamp'>" + new Date().toLocaleString() + "</span>";
  tweetList.appendChild(tweet);
  
  // clear the tweet input
  document.querySelector("#tweet-input").value = "";
});
