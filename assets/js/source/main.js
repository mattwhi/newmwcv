jQuery(document).ready(function($) {
	// var $section = $('section').length;
	// var $nav = $('.side-navigation li').length;
	//************************************************************************************//
	//Dynamically add navigation buttons to side navigation dependant on number of sections
	//************************************************************************************//
	// $('section').each(function() {
	// 	$('.side-navigation').append('<li><a href="#"></a></li>');
	// });
	//************************************************************************************//
	//Dynamically add unique class to each section for nav to target
	//************************************************************************************//
	// $('section').each(function(i) {
	// 	$(this).addClass('section' + (i));
	// });
	//************************************************************************************//
	//Dynamically add class'active' to first li in navigation
	//************************************************************************************//
	// $('.side-navigation li:nth-child(1) a').addClass('active');
	//************************************************************************************//
	//Scrolls to section corresponding with the index of the link
	//************************************************************************************//
	// $('.side-navigation li a').click(function(){
	// 		var index = $('.side-navigation li a').index(this);
	// 		$('.side-navigation li a').removeClass('active');
	// 		$(this).addClass('active');
	// 		$('html, body').animate({scrollTop: $('.section' + (index)).offset().top},800,'easeOutExpo')
	// 	});
	//************************************************************************************//
	//End
	//************************************************************************************//
	$('.nav li a, .home a, .scroll a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
	  });
	$(document).ready(function() {  
	    $("html").niceScroll();
		});
	$(function() {
        $('.chart').easyPieChart({
            barColor:'#921515',
            trackColor:'#fff',
            scaleColor: false,
            easing:"easeInOut",
            lineWidth: "5"
        });
    });
    $(function() {
    	var nav = $('nav');
		var scrolled = false;
		var target = $('nav').offset().top;

		$(window).scroll(function () {

	    if ($(window).scrollTop() >= target) {
	        nav.addClass('navbar-fixed-top');
	        scrolled = true;
	    }

	   if ($(window).scrollTop() <= target) {
	        nav.removeClass('navbar-fixed-top');
	        scrolled = false;      
	    	}
		});
    })
    $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
	});

});
jQuery(document).ready(function($){
$(window).scroll(function() {

    if ($(this).scrollTop() < $('header[data-anchor="home"]').offset().top) {
        $('nav li').removeClass('active');
    }

    if ($(this).scrollTop() >= $('header[data-anchor="home"]').offset().top) {
        $('nav li').removeClass('active');
        $('nav li:eq(0)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top) {
        $('nav li').removeClass('active');
        $('nav li:eq(1)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="skills"]').offset().top) {
        $('nav li').removeClass('active');
        $('nav li:eq(2)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="experience"]').offset().top) {
        $('nav li').removeClass('active');
        $('nav li:eq(3)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top)-20 {
        $('nav li').removeClass('active');
        $('nav li:eq(4)').addClass('active');
    }

	});
});