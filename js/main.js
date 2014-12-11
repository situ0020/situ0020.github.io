var $homeSection = $('#home')
var $aboutSection = $('#about')
var $portfolioSection = $('#portfolio')
var $contactSection = $('#contact')
var $logoSection = $('.home');
var $logo = $('.main-logo');
var $subhead = $('.subhead');

$(".nav").localScroll();
$(".contact").localScroll();


$logoSection.waypoint(function () {
	$logo.addClass('js-main-logo-fade');
}, { offset: '50%' });

$logoSection.waypoint(function () {
	$subhead.addClass('js-subhead-fade');
}, { offset: '50%' });