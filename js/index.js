window.addEventListener('DOMContentLoaded', function(){

    const burger = document.querySelector('.header__burger');
    const close = document.querySelector('.header__burger--close');
    const menu = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.nav__link');
    
    burger.addEventListener('click', function(el) {
      el.preventDefault();
      menu.classList.add('header__nav--open');
      document.body.classList.add('lock');
    });
    close.addEventListener('click', function(el) {
      el.preventDefault();
      menu.classList.remove('header__nav--open');
      document.body.classList.remove('lock');
    });

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const currentSection = document.getElementById(href);
        const offset = currentSection.offsetTop;
        menu.classList.remove('header__nav--open');
        document.body.classList.remove('lock');   
        window.scrollTo(document.body, offset, 0);
      });
    }
});
