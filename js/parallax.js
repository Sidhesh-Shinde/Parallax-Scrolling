$(function(){
	$(window).bind('scroll', function(e){
		parallax();
	})
});

function parallax(){
	var scrollPosition = $(window).scrollTop();//scrollTop() to check what the scroll position is
	$('#grid').css('top',(0 - (scrollPosition * .4))+'px');//giving the top value to the css property to get parallax effect
}