jQuery(document).ready(function($) {
	var $section = $('section').length;
	var $nav = $('.side-navigation li').length;
	//************************************************************************************//
	//Dynamically add navigation buttons to side navigation dependant on number of sections
	//************************************************************************************//
	for(var i=0; i <= $section; i++);
	$('section').each(function() {
		$('.side-navigation').append('<li><a href="#"></a></li>');
	});
	//************************************************************************************//
	//Scrolls to section corresponding with the index of the link
	//************************************************************************************//
	$('.side-navigation li').click(function(){
			var index = $('.side-navigation li').index(this);
			console.log('this is index number' + " " + index);
			$('html, body').animate({
				scrollTop: $('section[i]').offset().top
			})
		});
	//************************************************************************************//
	//End
	//************************************************************************************//
});