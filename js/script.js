jQuery(document).ready(function ($) {

  //scroll to block
  $(document).on('click', '.scroll', function (e) {
    e.preventDefault();
    //var id  = $(this).attr('href'),
      //top = $(id).offset().top;
   // $('body,html').animate({scrollTop: top}, 1000);
  });

  //accordion
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

  var swiper2 = new Swiper(".slider-2-items", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".next-2",
      prevEl: ".prev-2",
    },

  });

  var swiperTeam = new Swiper(".team-slider", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1280:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1600:{
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: ".next-team",
      prevEl: ".prev-team",
    },
  });


  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

  //select
  $('.select-block select').niceSelect();

  //input file
  $('input:file').change(function(){
    $this = $(this);
    $name = $this.val().replace('C:\\fakepath\\', '');
    $('.file-text').text($name);
  });

});