


const x = document.getElementById('audio');

$(document).ready(function() {
  var btn = $('.button');
  btn.click(function() {
    btn.toggleClass('paused');
    return false;
  });
});



window.onload = function() {
  document.getElementById('audio').play();
};

jQuery.fn.clickToggle = function(a, b) {
  return this.on('click', function(ev) { [b, a][this.$_io ^= 1].call(this, ev); });
};

$('.button').clickToggle(function(ev) {
  x.pause();
}, function(ev) {
  x.play();
});



$('.button').on('click', 'toggle', function() {
  alert('First handler for .toggle() called.');
}, function() {
  alert('Second handler for .toggle() called.');
});

//  $('#button').toggle(function() {
//   x.pause();
// }, function() {
//   x.play();
// });




// function play_audio(task) {
//   if(task == 'play'){
//     $('.my_audio').trigger('play');
//   }
//   if(task == 'stop'){
//     $('.my_audio').trigger('pause');
//     $('.my_audio').prop('currentTime', 0);
//   }
// }





// $(document).on('click', 'a[href^="#"]', function(event){
//   event.preventDefault();
	
//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top

//   });
// });
