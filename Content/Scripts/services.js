$(document).ready(function(){
var header = document.getElementById('tab-services');

var backgrounds = new Array(
    'url(Content/Images/1.jpeg)'
  , 'url(Content/Images/2.jpeg)'
  , 'url(Content/Images/3.jpeg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.style.background = backgrounds[current] + "transparent repeat center";
    header.style.maxWidth = "100%";
    header.style.backgroundPosition = "50% 50%";
}
setInterval(nextBackground, 10000);

header.style.background = backgrounds[0] + "transparent repeat center";
});