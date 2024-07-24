// var slideIndex = 0;
// showSlides(slideIndex);
// var slides, dots;



// function showSlides() {
//     var i;
//     slides = document.getElementsByClassName("mySlides");
//     dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";

//     setTimeout(showSlides, 6000);
// }


// //Função para os botões Prev e next
// function plusSlides(position) {
//     slideIndex += position;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     else if (slideIndex < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }


// //Funçao para os botões bolinhas    
// function currentSlide(index) {
//     if (index > slides.length) { index = 1 }
//     else if (index < 1) { index = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[index - 1].style.display = "block";
//     dots[index - 1].className += " active";
// }


//SLIDE PREV AND NEXT
//slide
$(".prev").click(function(){

	$('.carousel').carousel('prev');

})
$(".next").click(function(){
	$('.carousel').carousel('next');
})



//MOBILE SLIDE TOUCH
$("#carouselExampleInterval").on("touchstart", function(event){
	var xClick = event.originalEvent.touches[0].pageX;
$(this).one("touchmove", function(event){
	var xMove = event.originalEvent.touches[0].pageX;
	if( Math.floor(xClick - xMove) > 5 ){
		$(this).carousel('next');
	}
	else if( Math.floor(xClick - xMove) < -5 ){
		$(this).carousel('prev');
	}
});


$(".carousel").on("touchend", function(){
		$(this).off("touchmove");

});

});

$('.carousel').carousel({
	interval: 7900
  })


