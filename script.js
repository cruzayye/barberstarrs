// JavaScript Document

//parralax scroll effect
	
//button scroll

$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
	
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top

  });
});

// $('.barbers').on('hover', 'div', function() {
//   $(this).addClass('barberDisplay');
// });


$('.barbers').hover(
  function() {
    $(this).addClass('barberDisplay').fadeIn(2000);
  }, function() {
    $(this).removeClass('barberDisplay');
  }
);






