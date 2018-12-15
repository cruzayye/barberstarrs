// JavaScript Document

//parralax scroll effect
	
	








//button scroll

$(document).on('click', 'a[href^="#"]', function(event){
	event.preventDefault();
	
	$('html, body').animate({
		scrollTop: $($.attr(this,'href')).offset().top
	
	
	});
});