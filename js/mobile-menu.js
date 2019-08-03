  var navMain = document.querySelector('.main-nav__wrapper');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('opened')) {
      navMain.classList.remove('opened');
    } else {
      navMain.classList.add('opened');
    }
  });
