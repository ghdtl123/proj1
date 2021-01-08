$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    $(".vertical").slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });
})