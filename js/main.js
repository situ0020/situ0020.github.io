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


$logoSection.waypoint(function () {
	$logo.addClass('js-main-logo-fade');
}, { offset: '50%' });

$logoSection.waypoint(function () {
	$subhead.addClass('js-subhead-fade');
}, { offset: '50%' });

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
         
        if ($(this).scrollTop() > 300) {
            $('.small-logo').fadeIn('slow');
        }else{
            $('.small-logo').fadeOut('slow');
        } 
    }); 



