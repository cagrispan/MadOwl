window.onscroll = function() {
    let screen = window.innerHeight;
    let scroll = window.pageYOffset;
    if (scroll >= screen) {
        document.getElementById('coruja').style.display = 'block';
        document.getElementById('header-mobile').style.visibility = 'visible';
        document.getElementById('barra').style.top = '70px';
        document.getElementById('nav').style.top = '0px';

    }
    else {
        document.getElementById('coruja').style.display = 'none';
        document.getElementById('header-mobile').style.visibility = 'hidden';
        document.getElementById('barra').style.top = '0';
        document.getElementById('nav').style.top = '70px';
    }
};
