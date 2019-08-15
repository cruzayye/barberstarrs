$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
	
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top

  });
});


$('.barbers').hover(
  function() {
    $(this).addClass('barberDisplay').fadeIn(2000);
  }, function() {
    $(this).removeClass('barberDisplay');
  }
);



window.onload = function() {
  $('.loader').fadeOut();
};

