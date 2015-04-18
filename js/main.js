$(document).ready ( function () {
  $("#companyname").fitText(1.095);
  $.backstretch([
    "img/bar.jpg"
  , "img/dragon.jpg"
  , "img/entrance.jpg"
  , "img/kegs.jpg"
  ], {duration: 3000, fade: 0});
  
 if(jQuery().mixItUp) {
    $('#menuContainer').mixItUp();
  };

 if(jQuery().owlCarousel) {
   $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    stagePadding:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,

    responsive:{
      0:{
        items:1
      },
      500:{
        items:2
      }
    }
   });
 };
 

 if(jQuery().validate) {
    $("#regForm").validate();
  }

});
