$(document).ready(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true
      });
    $("#sec5 .regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
    $("#sec7 .regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
})