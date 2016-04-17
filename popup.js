// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

var APIKEY = 'AIzaSyAUCR4AiwEbGSYwIjFyzWoqxXJ8ciQhfsE'
//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&publishedBefore=2016-01-01T00%3A00%3A00Z&q=trailer&type=video&key={YOUR_API_KEY}

document.addEventListener('DOMContentLoaded', function() {

  var startButton = document.getElementById('start');

  startButton.addEventListener('click', function() {
      document.getElementsByTagName("iframe")[0].setAttribute("src","https://www.youtube.com/embed/UNAa5-uCowY");
      var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: 'UNAa5-uCowY',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
        }
  });
    
});
