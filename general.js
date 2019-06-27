window.onscroll = function() {
    let screen = window.innerHeight;
    let scroll = window.pageYOffset;
    if (scroll > 0) {
        document.getElementById('coruja').style.display = 'block';
        document.getElementById('header-mobile').style.visibility = 'visible';
        document.getElementById('coruja-pc').style.display = 'block';
        document.getElementById('nav-pc').style.backgroundColor = 'white';

        let x = document.getElementsByClassName("item");
        let i;
            for (i = 0; i < x.length; i++) {
            x[i].style.color = "black";
            }
    }

    else {
        document.getElementById('coruja').style.display = 'none';
        document.getElementById('header-mobile').style.visibility = 'hidden';
        document.getElementById('coruja-pc').style.display = 'none';
        document.getElementById('nav-pc').style.backgroundColor = 'black';

        let x = document.getElementsByClassName("item");
        let i;
            for (i = 0; i < x.length; i++) {
            x[i].style.color = "white";
            }
    }

};
