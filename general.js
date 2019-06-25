let height = screen.height;

window.onscroll = function(){
    let tamanho = window.innerHeight;
    let scroll = window.pageYOffset;
    if (scroll > tamanho) {
        console.log('test');
    }
};
