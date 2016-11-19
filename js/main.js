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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}