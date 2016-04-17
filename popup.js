//API key
var APIKEY = 'AIzaSyAUCR4AiwEbGSYwIjFyzWoqxXJ8ciQhfsE'

//Generate random date
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function ISODateString(d){
 function pad(n){return n<10 ? '0'+n : n}
 return d.getUTCFullYear()+'-'
      + pad(d.getUTCMonth()+1)+'-'
      + pad(d.getUTCDate())+'T'
      + pad(d.getUTCHours())+'%3A'
      + pad(d.getUTCMinutes())+'%3A'
      + pad(d.getUTCSeconds())+'Z'
}


document.addEventListener('DOMContentLoaded', function() {

  var startButton = document.getElementById('start');

  startButton.addEventListener('click', function() {
      
      //random date in RFC3339 2010-01-01T00:00:00:Z format
      var dateBefore = randomDate(new Date(2014, 0, 1), new Date());
      var normalizeDate = ISODateString(dateBefore);
      
      console.log(normalizeDate);
      
      //random number 
      var random= Math.floor((Math.random() * 50));
      
      console.log(random);
      
      var url = "";
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCi8e0iOVk1fEOogdfu4YgfA&maxResults=50&publishedBefore ="+normalizeDate+"&q=movie+trailer&type=video&videoEmbeddable=true&fields=items(id%2Ckind%2Csnippet)&key="+APIKEY, true);
      xhr.send();
      xhr.onreadystatechange = processRequest;
      
      function processRequest(e){
          if (xhr.readyState ==4 && xhr.status ==200){
              var response = JSON.parse(xhr.responseText);
              
              console.log(response);
              
              var videoURL = "https://www.youtube.com/embed/";
              videoURL = videoURL+response["items"][random]["id"]["videoId"];
              document.getElementsByTagName("iframe")[0].setAttribute("src",videoURL);
              var player;
                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                      height: '390',
                      width: '640',
                      videoId: 'UNAa5-uCowY',
                      events: {
                        'onReady': onPlayerReady
                      }
                    });
                }
          }
      }
  });
    
});
