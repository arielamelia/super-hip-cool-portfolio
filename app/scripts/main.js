console.log('\'Allo \'Allo!');
$(document).ready(function(){
	$('#demosMenu').change(function(){
	  window.location.href = $(this).find('option:selected').attr('id') + '.html';
	});
	 $('.carousel.carousel-slider').carousel({fullWidth: true});
});