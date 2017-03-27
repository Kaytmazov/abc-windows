// Видео слайдер
$(document).ready(function(){
  $('.video-items').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.citations-slider').slick({
    dots: true, 
  });

  $('.video-reviews-slider').slick({
    dots: true, 
  });

});