var $win = $(window);
var $homeSection = $('#home');
var $aboutSection = $('#about');
var $portfolioSection = $('#portfolio');
var $contactSection = $('#contact')
var $logoSection = $('.home');
var $logo = $('.main-logo');
var $subhead = $('.subhead');
var $smallLogo = $('.small-logo');

$(".nav").localScroll();
$(".contact").localScroll();


/*
$logoSection.waypoint(function () {
	$logo.addClass('js-main-logo-fade');
}, { offset: '50%' });

$logoSection.waypoint(function () {
	$subhead.addClass('js-subhead-fade');
}, { offset: '50%' });
$('.small-logo').hide();
$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
         
        if ($(this).scrollTop() > 300) {
            $('.small-logo').fadeIn('slow');
        }else{
            $('.small-logo').fadeOut('slow');
        } 
    }); 
*/
	
$(".nav-top a").on('click', function(e){
navTop.setAttribute('data-state', 'collapsed');
  $(".nav-btn").attr('data-state', 'inactive');
});

$(document).ready(function() {
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
  for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height =  getRandomSize(200, 400);
  }
});


