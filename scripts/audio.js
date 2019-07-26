
const x = document.getElementById('audio');

$(document).ready(function() {
  var btn = $('.audio-button');
  btn.click(function() {
    btn.toggleClass('paused');
    return false;
  });
});

//Play button
jQuery.fn.clickToggle = function(a, b) {
  return this.on('click', function(ev) { [b, a][this.$_io ^= 1].call(this, ev); });
};

$('.audio-button').clickToggle(function(ev) {
  x.pause();
}, function(ev) {
  x.play();
});

window.onload = function() {
  document.getElementById('audio').play();
};