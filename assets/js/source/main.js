jQuery(document).ready(function($) {
	var $section = $('section').length;
	var $nav = $('.side-navigation li').length;
	//************************************************************************************//
	//Dynamically add navigation buttons to side navigation dependant on number of sections
	//************************************************************************************//
	$('section').each(function() {
		$('.side-navigation').append('<li><a href="#"></a></li>');
	});
	//************************************************************************************//
	//Dynamically add unique class to each section for nav to target
	//************************************************************************************//
	$('section').each(function(i) {
		$(this).addClass('section' + (i));
	});
	//************************************************************************************//
	//Dynamically add class'active' to first li in navigation
	//************************************************************************************//
	$('.side-navigation li:nth-child(1) a').addClass('active');
	//************************************************************************************//
	//Scrolls to section corresponding with the index of the link
	//************************************************************************************//
	$('.side-navigation li a').click(function(){
			var index = $('.side-navigation li a').index(this);
			$('.side-navigation li a').removeClass('active');
			$(this).addClass('active');
			$('html, body').animate({scrollTop: $('.section' + (index)).offset().top},800,'easeOutExpo')
		});
	//************************************************************************************//
	//End
	//************************************************************************************//
});