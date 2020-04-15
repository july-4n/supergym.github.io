'use strict';

(function () {

  var scrollBtn = document.querySelector('.first-screen__btn');
  var membership = document.querySelector('.membership');

  var tab = function () {
    var chooseTab = document.querySelectorAll('.membership__item');
    var tabContent = document.querySelectorAll('.tab');
    var tabName;

    chooseTab.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      chooseTab.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent() {
      tabContent.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
      });
    }
  };

  tab();

  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollBy({top: (membership.offsetTop - window.pageYOffset), left: 0, behavior: 'smooth'});
    });
  }

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
      },
      {
        breakpoint: 767,
      }
    ],
  });
})();
