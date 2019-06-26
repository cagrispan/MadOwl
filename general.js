window.onscroll = function() {
    let screen = window.innerHeight;
    let scroll = window.pageYOffset;
    if (scroll >= screen) {
        document.getElementById('coruja').style.display = "block";
    }
    else {
        document.getElementById('coruja').style.display = "none";
    }
};
