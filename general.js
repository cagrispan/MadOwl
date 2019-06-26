window.onscroll = function() {
    let screen = window.innerHeight;
    let scroll = window.pageYOffset;
    if (scroll >= screen) {
        document.getElementById('coruja').style.display = "block";
        document.getElementById('header-mobile').style.visibility = "visible";

    }
    else {
        document.getElementById('coruja').style.display = "none";
        document.getElementById('header-mobile').style.visibility = "hidden";

    }
};
