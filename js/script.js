jQuery(document).ready(function(){


	if( $('.stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.nav-trigger') && !$(event.target).is('.nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}


var pContainerHeight = $('.kabir').height();

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	if(wScroll <= pContainerHeight) {

		$('.logo-kabir').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});

		$('.quote-kabir').css({
			'transform': 'translate(0px, '+wScroll /4 +'%)'
		});

		$('.fore-kabir').css({
			'transform': 'translate(0px, '+wScroll /40 +'%)'
		});
	}


// flex Icon Designing

if (wScroll > $('.summary').offset().top - ($(window).height() / 1.2)) {

	$('.summary figure').each(function(i) {

		setTimeout(function(){
			$('.summary figure').eq(i).addClass('is-showing');
		}, (700 *(Math.exp(i * 0.14))) -700);

		
	});
}


if (wScroll > $('.dia').offset().top -($(window).height() / 2.0)) {


	$('.dia .figure').each(function(i){

		setTimeout(function(){
		$('.dia .figure').eq(i).addClass('flipping');
	}, (700 * (Math.exp(i * 0.14))) - 700);
	});
}









});

});