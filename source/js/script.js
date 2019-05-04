var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('nav__toggle--opened')) {
    navToggle.classList.remove('nav__toggle--opened');
  } else {
    navToggle.classList.add('nav__toggle--opened');
  }

  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
