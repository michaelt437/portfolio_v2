var homepage = document.getElementsByTagName('section');
var reveal = function() {
    for(i = 1; i < homepage.length; i++){
        $(homepage[i]).css({'display': 'block'});
    }
}

    /*************
    * PARALLAX SCROLL
    * **********/

    // window.onscroll = function() {
    //     var shift = -.5;
    //     var bg = $('.home-bg');
    //     var yPos = window.pageYOffset;
    //     var pos = '50%' + (yPos * shift) + 'px';
    //     bg.css({ 'background-position': pos });
    // }

var tl = new TimelineMax({repeat:10, repeatDelay: 1});
tl.to($('.home-bg'), 60, {backgroundSize: "200%"})
