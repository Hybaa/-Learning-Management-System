
var mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
var mobileMenu = document.querySelectorAll('[data-mobile-menu]');
var mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
var overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {


   var mobileMenuCloseFunc = function () {
      mobileMenu[i].classList.remove('active');
   overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
      mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', mobileMenuCloseFunc);

}




var accordionBtn = document.querySelectorAll('[data-accordion-btn]');
var accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    var clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}