'use strict';
/* eslint-disable */

(function () {
  (function ($) {
    $('.coaches__slider').slick({
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
      ],
    });

    $('.review__slider').slick({
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
    });
  })(jQuery);

  //  Маска номера телефона

  var phoneFormInput = document.querySelector('#user-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  var maskForm = IMask(phoneFormInput, maskOptions);
})();
