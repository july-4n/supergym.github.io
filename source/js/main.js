'use strict';

(function () {
  var scrollBtn = document.querySelector('.first-screen__btn');
  var membership = document.querySelector('.membership');

  // Табы

  var tab = function () {
    var chooseTab = document.querySelectorAll('.membership__item');
    var tabContent = document.querySelectorAll('.tab');
    var tabName;

    chooseTab.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });

    /** @this selectTabNav */
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
        var result = item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        return (result);
      });
    }
  };

  tab();

  // Скролл

  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if(membership) {
      membership.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  })
})();
