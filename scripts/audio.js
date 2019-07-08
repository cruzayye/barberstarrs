
const x = document.getElementById('audio');

// $(document).ready(function() {
//   var btn = $(".button");
//   btn.click(function() {
//     btn.toggleClass("paused");
//     return false;
//   });
// });


function playAudio() {
  x.play();
  
}


// window.onload = function() {
//   document.getElementById('audio').play();
// };

$('#play').on('click', function() {
  x.pause();
});







// $(document).on('click', 'a[href^="#"]', function(event){
//   event.preventDefault();
	
//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top

//   });
// });
