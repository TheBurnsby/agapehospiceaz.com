$(document).ready(function(){

	$(".main-menu").delay("500").fadeIn("slow");
	$("#fade-title").delay("700").fadeIn("slow");
	// Slider jQuery
	$('.classy').slick({
		slidesToShow: 1,
		// autoplay: true,
	});
	//
	$('.sliderA').slick({
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false
	})
});

$(document).foundation();
