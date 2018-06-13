$(document).ready(function(){
      $('.slick_photos').slick({
     
			  dots: true,
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear',
			  autoplay:true,
			  autoplaySpeed:4500,
								});
	$('.slick_brands').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  autoplay:true,
			  autoplaySpeed:2000,
			  fade: true

						});
	
});
   
