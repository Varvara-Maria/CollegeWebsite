window.addEventListener('scroll', () => {
    var posY = window.pageYOffset || document.documentElement.scrollTop;
    var intro = document.querySelector('.intro');
    var header = document.querySelector('.header');
    var height__intro = intro.offsetHeight; // высота intro
    if (posY+1 >= height__intro) { // если posY+1 > высоты intro, то появится header
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});