var player;
var vid = "BPJSmlTMsQ4";
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "720",
    width: "1080",
    videoId: vid,
  });
}

$(document).on("mouseover", "#player", function () {
  player.playVideo();
});
$(document).on("mouseout", "#player", function () {
  player.pauseVideo();
});
